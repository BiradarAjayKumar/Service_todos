import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';
import { TodosService } from '../../services/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todosArr:Array<Itodo>=[]
  constructor(private _todoService:TodosService) { }

  ngOnInit(): void {
    this.todosArr=this._todoService.fetchAllTodos()
  }
  onRemove(id:string){
    let getConfirmation=confirm('are you sure you want to remove this?')
    if(getConfirmation){
console.log(id);
this._todoService.RemovePost(id)
    }
  }

}
