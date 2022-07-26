# Generated by Django 4.0.6 on 2022-07-24 21:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0004_alter_detalledocumento_documento_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detalledocumento',
            name='documento',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documento', to='base.documento'),
        ),
        migrations.AlterField(
            model_name='detalledocumento',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario', to=settings.AUTH_USER_MODEL),
        ),
    ]