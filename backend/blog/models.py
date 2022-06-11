from django.db import models
from datetime import datetime
from django.template.defaultfilters import  slugify

# Create your models here.
class Categories(models.TextChoices):
    TECHNOLOGY='technology'
    DESIGN = 'design'
    BUSINESS = 'business'
    LIFESTYLE = 'lifestyle'
    CULTURE = 'culture'
    TRAVEL ='travel'



class Category(models.Model):

    name = models.CharField(max_length=100, blank=True, null=True)
    slug=models.SlugField(unique=True)

    class Meta:
        verbose_name = ("Category")
        verbose_name_plural = ("Categories")

    def save(self, *args, **kwargs):
        original_slug= slugify(self.name)
        queryset= Category.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug=original_slug
        while(queryset):
            slug= original_slug+"-"+ str(count)
            count +=1
            queryset= Category.objects.all().filter(slug__iexact=slug).count()
        self.slug=slug
        super(Category, self).save(*args, **kwargs)
        
    def __str__(self):
        return self.name


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField ()
    category =models.CharField(max_length=50, choices=Categories.choices, default= Categories.TECHNOLOGY)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE)
    thumbnail = models.ImageField(upload_to = "photos/%Y/%m/%d/")
    excerpt = models.CharField(max_length=200)
    month=models.CharField(max_length=10)
    day=models.CharField(max_length=2)
    content=models.TextField()
    featured =models.BooleanField(default=False)
    date_created= models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug= slugify(self.title)
        queryset= BlogPost.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug=original_slug
        while(queryset):
            slug= original_slug+"-"+ str(count)
            count +=1
            queryset= BlogPost.objects.all().filter(slug__iexact=slug).count()
        self.slug=slug

        if self.featured:
            try:
                temp =BlogPost.objects.get(featured=True)
                if self !=temp:
                    temp.featured=False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        super(BlogPost, self).save(*args, **kwargs)

    def  __str__(self):
        return self.title