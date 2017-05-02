# Usage instructions 

NodeJS Library Management Backend (InMemory noDB no Persistency)

`GET     /`       ->  __list all__ \
`GET     /:id`    ->  __read one__ \
`PUT     /:id`    ->  __update__ \
`POST    /`       ->  __insert__ \
`DELETE  /:id`    ->  __remove__ 

## Starting backend

The backend can be started in development environment with `node bin/www`
In a production environment I suggest use pm2 node module: `pm2 start bin/www`