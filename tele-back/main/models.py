from django.db import models

class Page(models.Model):
    name = models.CharField(max_length=100, db_index=True, blank=True, default="Страница")
    date_created = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    rows = models.ManyToManyField('Row', related_name='page_rows')

    class Meta:
        ordering = ['-date_created']

    def __str__(self):
        if self.name == "":
            return str(self.id)
        return str(self.name)

class Row(models.Model):
    blocks = models.ManyToManyField("Block", related_name='row_blocks', blank=True) # Cols
    order = models.IntegerField(default=1)

    def __str__(self):
        return "row" + str(self.id)

    class Meta:
        ordering = ['order']

class Block(models.Model):
    order = models.IntegerField(default=1)
    type = models.CharField(max_length=20, default="")
    cols = models.IntegerField(default=1)
    depth = models.CharField(max_length=5, default="", blank=True)
    # Properties
    btn_view = models.CharField(max_length=10, default="primary")
    value = models.CharField(max_length=1000, default="", blank=True) # Additionally, it's a default value for input
    icon = models.CharField(max_length=50, default="", blank=True)
    iconPosition = models.CharField(max_length=10, default="left", blank=True)
    color = models.CharField(max_length=10, default="primary2", blank=True)
    sizeElem = models.CharField(max_length=10, default="medium", blank=True)
    shape = models.CharField(max_length=10, default="rounded", blank=True)
    disabled = models.BooleanField(default=False, blank=True)
    class_name = models.CharField(max_length=100, default="", blank=True)
    typ_color = models.CharField(max_length=20, default="main", blank=True)
    variant = models.CharField(max_length=20, default="h1", blank=True)
    tag = models.CharField(max_length=20, default="default", blank=True)
    text = models.TextField(default="", blank=True)
    spacingBottom = models.CharField(max_length=10, default="m", blank=True)
    spacingTop = models.CharField(max_length=10, default="m", blank=True)
    spacing = models.CharField(max_length=5, default="m", blank=True)
    label = models.CharField(max_length=200, default="Label", blank=True)
    hint = models.CharField(max_length=200, default="", blank=True)
    title = models.CharField(max_length=200, default="Assistive title", blank=True) # e.g title for multiselect
    default_open = models.BooleanField(default=False, blank=True)
    select_items = models.ManyToManyField('SelectItem', related_name="block_select_items", blank=True)
    fill = models.CharField(max_length=20, default="default", blank=True)
    size = models.IntegerField(default=24, blank=True)
    checked = models.BooleanField(default=False, blank=True)
    text_position = models.CharField(max_length=10, default="right", blank=True)
    tab_items = models.ManyToManyField('TabItem', related_name="block_tab_items", blank=True)
    box_children = models.ManyToManyField('Row', related_name="block_box_children", blank=True, default=None)
    corners_rounding = models.CharField(max_length=20, default="m")
    global_box = models.BooleanField(default=True)

    def __str__(self):
        return self.type + str(self.id)

    class Meta:
        ordering = ['order']

class SelectItem(models.Model):
    key = models.IntegerField(default=1)
    value = models.CharField(max_length=200, default="Select item")

class TabItem(models.Model):
    index = models.IntegerField(default=1)
    value = models.TextField(default="")
    icon = models.CharField(max_length=50, default="")
    iconPosition = models.CharField(max_length=10, default="left")



