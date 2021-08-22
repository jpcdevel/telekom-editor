import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class EditButton(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        value = graphene.String(required=True)
        color = graphene.String(required=True)
        size = graphene.String(required=False)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id, value, color, size):
        block = Block.objects.get(id=id)

        block.value = value
        if size:
            block.sizeElem = size
        block.color = color
        block.save()
        return EditButton(block=block)