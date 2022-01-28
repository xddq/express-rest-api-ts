# express rest api ts
- coding a simple rest api in express using typescript.
- will be aple to CRUD todos.

# commands to test the api using [httpie](https://github.com/httpie)
- list todos:
    - `http GET localhost:3001/todos`
- list one todo by uuid:
    - `http GET localhost:3001/todos/uuidValueHere`
- create a todo:
    - `http POST localhost:3001/todos title="clean up kitchen"`
- update a todo (switch completed)
    - `http PUT localhost:3001/todos/uuidValueHere title="clean up kitchen" \
        completed="true"`
