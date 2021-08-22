import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class WidenElem(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        type = graphene.String(required=True)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id, type):
        block = Block.objects.get(id=id)
        availableCols = block.row.colsLasted

        if type == 'increase' and block.cols < 12:
            block.cols += 1
            availableCols -= 1
        elif type == 'decrease' and block.cols > 1:
            block.cols -= 1
            availableCols += 1


        block.row.colsLasted = availableCols
        block.row.save()
        block.save()
        return WidenElem(block=block)