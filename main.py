from instagrapi import Client
import time

cl = Client()

cl.login_by_sessionid('GET YOUR SESSION COOKIE VALUE')

user_id = cl.user_id_from_username('YOUR USERNAME')
followers = cl.user_followers(user_id, 0)

with open('followers.csv', 'w') as f:
    for follower in followers:
        print(followers[follower].username)
        f.write(followers[follower].username + '\n')

        print(follower)
