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
editingTodoId!: string; 
  isEditing: boolean = false; 
  constructor( private _uuidService:UuidService,private todoService:TodosService) { }
onAdd(){
if (this.todoForm.valid && this.todoForm.value.todoItem.trim() !== '') { 
      if (this.isEditing) { 
        const updatedTodo: Itodo = { 
          todoId: this.editingTodoId, 
          todoItem: this.todoForm.value.todoItem 
        }; 
        this.todoService.updateTodo(updatedTodo); 
        this.isEditing = false; 
      } else { 
        let todoObj: Itodo = this.todoForm.value; 
        todoObj.todoId = this._uuidService.generateUUID(); 
        this.todoService.createNewPost(todoObj); 
      } 
      this.todoForm.reset(); 
    } 
    else {
    alert('Please enter a valid todo item!');
  }
  } 

  editTodo(todo: Itodo) {
  this.todoForm.form.patchValue({
    todoItem: todo.todoItem
  });
  this.editingTodoId = todo.todoId;
  this.isEditing = true;
}
}


