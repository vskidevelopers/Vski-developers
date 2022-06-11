from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost

# Apply summernote to all TextField in model.
class BlogPostAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    exclude= ('slug',)
    list_display=('id', 'title', 'category', 'date_created')
    list_display_links = ('id','title' )
    search_fields=('title',)
    list_per_page=25
    summernote_fields = ('content',)

# class CategoryAdmin(admin.ModelAdmin):
#     exclude=('slug',)

admin.site.register(BlogPost,BlogPostAdmin)
# admin.site.register(Category, CategoryAdmin)

