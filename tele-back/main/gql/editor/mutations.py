import graphene
from graphene_django import DjangoObjectType

from main.models import Page
from main.gql.types import PageType

class CreatePage(graphene.Mutation):
    page = graphene.Field(PageType)

    @classmethod
    def mutate(cls, root, info):
        page = Page.objects.create()
        return CreatePage(page=page)

class ChangePageName(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        name = graphene.String(required=True)

    page = graphene.Field(PageType)

    @classmethod
    def mutate(cls, root, info, id, name):
        page = Page.objects.get(id=id)
        page.name = name
        page.save()
        return ChangePageName(page=page)

class EditorMutations(graphene.ObjectType):
    createPage = CreatePage.Field()
    changePageName = ChangePageName.Field()