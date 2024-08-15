/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo 
{
    constructor() 
    {
        this.todo = [];
    }
    add(x)
    {
        this.todo.push(x);
    }
    remove(i)
    {
        if(i<0 || i>=this.todo.length)
            return;
        this.todo.splice(i,1);
    }
    update(i, x)
    {
        if(i<0 || i>=this.todo.length)
            return;
        this.todo[i]=x;
    }
    getAll()
    {
        return this.todo;
    }
    get(i)
    {
        if(i<0 || i>=this.todo.length)
            return null;
        return this.todo[i];
    }
    clear()
    {
        this.todo.splice(0,this.todo.length);
    }
}

module.exports = Todo;
