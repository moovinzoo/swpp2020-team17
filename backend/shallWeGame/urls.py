from django.urls import path, include
from . import views
from django.conf.urls import url
from django.conf import settings

urlpatterns = [
    path('login/', views.discord_login, name='discord_login'),
    path('login/redirect/', views.discord_login_redirect, name='discord_login_redirect'),
    path('logout/', views.discord_logout, name='discord_logout'),
    path('currentUser/', views.currentUser, name='currentUser'),
    path('user/', views.user_list, name='user_list'),
    path('user/<int:id>', views.user_info, name='user_info'),

    path('post/', views.post_list, name='post'),
    path('post/<int:id>/', views.post_info, name='post_info'),
    path('post/<int:id>/like/', views.post_like_toggle, name='post_like_toggle'),
    path('comment/', views.comment_list, name='comment'),
    path('comment/<int:id>/', views.comment_info, name='comment_info'),
    path('tag/', views.tag_list, name='tag'),
    path('tag/<int:id>/', views.tag_info, name='tag_info'),
    
    path('chatroom/', views.chatroom_list, name='chatroom_list'),
    path('chatroom/<int:id>/', views.chatroom_info, name='chatroom_info'),
    path('chatroom/<int:id>/global/', views.chatroom_global_toggle, name='post_global_toggle'),
    path('chatroom/<int:id>/message/', views.chatroom_message, name='chatroom_message'),
    path('token/', views.token, name='token'),
]
