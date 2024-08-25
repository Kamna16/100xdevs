const express = require('express');
const app = express();
const todo = require('./todo.json')
const port = 5000;
app.get('/', (req,res) =>{
    try {
        return todo;
    } catch (error) {
        console.log('got error while fetching details');
    }
})
app.post('/addTodo', (req,res) =>{
    try {
        const addtodo = req.body;

        todo.push(addtodo);
    } catch (error) {
        console.log(error);
        console.error('got error while fetching details');
    }
})
app.post('/deleteTodo', (req,res) =>{
    try {
        const deletetodo = req.body;

        todo.remove(deletetodo.id);
        console.log('todo deleted successfully')
    } catch (error) {
        console.log(error);
        console.error('got error while deleting todo');
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})