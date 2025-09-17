import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todos';
import { TodosService } from '../../services/todos.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
@ViewChild('todoForm') todoForm!:NgForm
  constructor( private _uuidService:UuidService,private todoService:TodosService) { }
onAdd(){
if(this.todoForm.valid){
  let todoObj:Itodo=this.todoForm.value;
  todoObj.todoId=this._uuidService.generateUUID();
  console.log(todoObj)
  this.todoService.createNewPost(todoObj)

  this.todoForm.reset()
}
}
}
