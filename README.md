# Koa-Mongoose-Socket.io Boilerplate

## Installation 

```sh
git clone git@github.com:ryosuzuki/koa-mongoose-socket.git
cd koa-mongoose-socket
npm install && bower install 
node --harmony server.js
```

## Features

### MVC directory structure:

All of application files lie in `app` directory, which is Rails like MVC directory structure.

```
.
|-- app
|   |-- assets
|   |   |-- css
|   |   |   |-- style.css
|   |   |   `-- style.less
|   |   `-- img
|   |-- controllers
|   |   `-- posts.js
|   |-- models
|   |   `-- post.js
|   `-- views
|       |-- layouts
|       |   |-- default.html
|       |   `-- header.html
|       `-- posts
|           |-- index.html
|           |-- new.html
|           `-- show.html
|-- bower.json
|-- config
|   |-- koa.js
|   |-- routes.js
|   `-- socket.js
|-- package.json
`-- server.js
```

### RESTful API 

Routes setting is defined in `config/routes.js`.

```js
// RESTful API for Socket.io
app.io.route('req:posts:socket', posts.socket);

// RESTful API
app.get('/', posts.index);
app.get('/posts/new', posts.new);
app.get('/posts/:id', posts.show);
app.get('/posts/:id/edit', posts.edit);
app.post('/posts', posts.create);
```





