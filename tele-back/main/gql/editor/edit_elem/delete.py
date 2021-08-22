import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class DeleteElem(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id):
        block = Block.objects.get(id=id)
        row = block.row
        if row.blocks.all().count() <= 1:
            block.delete()
        else:
            row.colsLasted = row.colsLasted + block.cols

            row.save()
            block.delete()
        return DeleteElem(block=block)