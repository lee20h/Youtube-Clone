# Youtube Clone

Cloning Youtube with Vanilla, NodeJS and MongoDB

## get Started

1. make .env file containing DB information, Login configuration

```
DIRECTORY/.env

MONGO_URL=YOUR_MONGODB_URL
PORT=YOUR_PORT
COOKIE_SECRET=YOUR_COOKIE_SECRET
GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
FACEBOOK_APP_ID=YOUR_FACEBOOK_APP_ID
FACEBOOK_APP_SECRET=YOUR_FACEBOOK_APP_SECRET
```

2. run the following code

```
$ npm install
$ npm run dev:server
```

```
$ npm run dev:assets
```

3. Website will be presented on browser. or visit localhost:PORT

## ⚙ Structure

```
src
├── assets // static assets by webpack
│   ├── js
│   └── scss
├── controllers // MVC: Controller
│   ├── user
│   └── video
├── models // MVC: Model
│   ├── comment
│   ├── user
│   └── video
├── routers // express router
│   ├── api
│   ├── global
│   ├── user
│   └── video
├── views // MVC: View
│   ├── layout // main
│   ├── mixins // pug mixin
│   ├── partials // header, footer ...
│   └── etc // detail screen
├── app
├── db
├── middleware
├── passport
└── routes
```

## Web Page

![image](https://user-images.githubusercontent.com/59367782/104740858-c9a47100-578b-11eb-9562-93cce307fdc7.png)

### Video

![image](https://user-images.githubusercontent.com/59367782/104740998-f789b580-578b-11eb-85fa-75f1b8f14b9a.png)
