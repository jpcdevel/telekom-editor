import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class CreateRow(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        cols = graphene.Int(required=True)
        type = graphene.String(required=True)
        value = graphene.String(required=True)
        text = graphene.String(required=True)
        isBox = graphene.Boolean(required=True)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id, cols, type, value, text, isBox):
        parent = None
        if isBox == False:
            parent = Page.objects.get(id=id)
        else:
            parent = Block.objects.get(id=id)

        last_row_order = 0

        if isBox == False:
            if parent.rows.all().count() > 0:
                last_row_order = parent.rows.all().last().order
        else:
            if parent.box_children.all().count() > 0:
                last_row_order = parent.box_children.all().last().order

        row = Row.objects.create(order=last_row_order + 1)
        if isBox == False:
            parent.rows.add(row)
        else:
            parent.box_children.add(row)
        parent.save()

        if type == 'box':
            cols = 12

        block = Block.objects.create(cols=cols, type=type, value=value, text=text, row=row)

        row.blocks.add(block)
        if type == 'box':
            row.colsLasted = 0
        else:
            row.colsLasted = 12 - block.cols
        row.save()
        return CreateRow(block=block)