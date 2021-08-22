import graphene
from graphene_django import DjangoObjectType

from main.models import Page, Block, Row
from main.gql.types import PageType, BlockType

class EditTypo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        text = graphene.String(required=True)
        color = graphene.String(required=True)
        variant = graphene.String(required=True)

    block = graphene.Field(BlockType)

    @classmethod
    def mutate(cls, root, info, id, text, color, variant):
        block = Block.objects.get(id=id)

        block.text = text
        block.variant = variant
        block.color = color
        block.save()
        return EditTypo(block=block)