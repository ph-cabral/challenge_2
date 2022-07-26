from django.contrib import admin
from users.models import NewUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'user_name', 'first_name',) # filter textbox above
    list_filter = ('email', 'user_name', 'first_name', 'is_active', 'is_staff') # filter sidebar in right side
    ordering = ('-start_date',) # column to order the users table
    list_display = ('user_name', 'id', 'email', 'first_name', 'is_active', 'is_staff', 'is_superuser') # fields of the users table
    
    # first parameter ("User" and "Permission") represent a title of the page section inside admin panel
    # second parameter (the dictionaries) represent the info inside the section
    fieldsets = (
        ('User', {'fields': ('email', 'user_name', 'first_name',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Personal', {'fields': ('about',)}),
    )
    # modify the frontend of the admin panel
    formfield_overrides = {
        # size of the "about" textarea inside user admin panel
        models.TextField: {'widget': Textarea(attrs={'rows': 10, 'cols': 60})}, 
    }
    add_fieldsets = (
        ("User info", {
            'classes': ('wide',), # some classes for html and css of admin page
            'fields': ('email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}
        ),
    )


admin.site.register(NewUser, UserAdminConfig)