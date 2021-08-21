from graphene_django import DjangoObjectType
from main.models import *

class PageType(DjangoObjectType):
    class Meta:
        model = Page
        fields = (
            "id",
            "name",
            "date_created",
            "rows"
        )

class RowType(DjangoObjectType):
    class Meta:
        model = Row
        fields = (
            "blocks",
            "order"
        )

class BlockType(DjangoObjectType):
    class Meta:
        model = Block
        fields = (
            "order",
            "type",
            "cols",
            "depth",
            "value",
            "btn_view",
            "icon",
            "iconPosition",
            "color",
            "sizeElem",
            "shape",
            "disabled",
            "class_name",
            "typ_color",
            "variant",
            "tag",
            "text",
            "spacingBottom",
            "spacingTop",
            "spacing",
            "label",
            "hint",
            "title",
            "default_open",
            "select_items",
            "fill",
            "size",
            "checked",
            "text_position",
            "tab_items",
            "box_children",
            "corners_rounding",
            "global_box"
        )

class SelectItemType(DjangoObjectType):
    class Meta:
        model = SelectItem
        fields = (
            "key",
            "value"
        )

class TabItemType(DjangoObjectType):
    class Meta:
        model = TabItem
        fields = (
            "index",
            "value",
            "icon",
            "iconPosition"
        )