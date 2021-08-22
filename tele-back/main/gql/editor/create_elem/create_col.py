import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class CreateCol(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        cols = graphene.Int(required=True)
        type = graphene.String(required=True)
        value = graphene.String(required=True)
        text = graphene.String(required=True)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id, cols, type, value, text):
        row = Row.objects.get(id=id)
        block = Block.objects.create(cols=cols, type=type, value=value, text=text, row=row)

        if row.blocks.all().count() > 0:
            block.order = row.blocks.all().last().order + 1
        else:
            block.order = 1
        block.save()

        row.blocks.add(block)
        row.colsLasted = row.colsLasted - block.cols
        row.save()
        return CreateCol(block=block)