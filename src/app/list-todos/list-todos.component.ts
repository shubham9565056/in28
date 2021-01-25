import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

   export class Todo {
     constructor(
       public id: number,
       public description: string,
       public done: boolean,
       public targetDate: Date
     ){

   }

   }
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo []
  message: string
    //new Todo(1, 'Learn to dance', false, new Date()),
    //new Todo(2, 'lear to code', false, new Date()),
    //new Todo(3, 'Learn to game', false, new Date())

    //  {id : 1, description: 'Learn to dance'},
    // {id : 2, description: 'Learn to code'},
    // {id : 3, description: 'Learn to game'}


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
 this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('shubh').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
}
  deleteTodo(id){
  console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('shubh', id).subscribe(
      response=> {
        console.log(response);
        this.message = `Delete Todo ${id} Successful`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }
}

