import graphene

from main.models import Page

# from main.schemas.auth.mutations import AuthMutation
# from main.schemas.auth.queries import AuthQueries
from main.gql.editor.mutations import EditorMutations
#
from main.gql.types import PageType

class Query(graphene.ObjectType):
    get_all_pages = graphene.List(PageType)
    get_page_by_id = graphene.Field(PageType, id=graphene.ID(required=True))

    def resolve_get_all_pages(root, info):
        return Page.objects.all()

    def resolve_get_page_by_id(root, info, id):
        return Page.objects.get(id=id)

class Mutation(EditorMutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
