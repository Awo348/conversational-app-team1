from django.test import TestCase
from .models import User
from django.urls import resolve
from .views import UserDetail, ListUser


class UserTests(TestCase):
    """
    Test the custom User model
    """
    def test_create_user(self):
        user = User.objects.create_user(
            username='wowu',
            email='wowu@test.com',
            password='test123'
        )

        self.assertEqual(user.username, 'wowu')
        self.assertEqual(user.email, 'wowu@test.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        # Test if model can create super user successfully

        admin_user = User.objects.create_superuser(
            username='newadmin',
            email='newadmin@test.com',
            password='test123'
        )
        self.assertEqual(admin_user.username, 'newadmin')
        self.assertEqual(admin_user.email, 'newadmin@test.com')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)

    def test_url_resolves_to_user_details(self):
        found = resolve('/api/1/')
        self.assertEqual(found.view_name, 'accounts.views.UserDetail')
    
    def test_url_resolves_to_users_list(self):
        found = resolve('/api/')
        self.assertEqual(found.view_name, 'accounts.views.ListUser')