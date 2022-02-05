# express rest api ts
- exploring express by coding a simple CRUD rest api using typescript.
- based on .js guide here: https://www.youtube.com/watch?v=P5q8rUGCN9k, adapted to .ts
- added dummy custom authentication middleware for the PUT route.

# Quickstart
- `npm i`
- `npm run build`
- `npm run start`
- *time to query the server!*

# commands to test the api using [httpie](https://github.com/httpie)
- list todos:
    - `http GET localhost:3001/todos`
- list one todo by uuid:
    - `http GET localhost:3001/todos/uuidValueHere`
- create a todo:
    - `http POST localhost:3001/todos title="clean up kitchen" completed=false`
- update a todo
    - `http PUT localhost:3001/todos/uuidValueHere title="clean up kitchen" \
        completed=true authenticated:"true"`
