import { Injectable, OnInit } from "@angular/core";
import { Itodo } from "../models/todos";
import { SnackbarService } from "./snackbar.service";


@Injectable({
    providedIn:"root"
})
export class TodosService implements OnInit{
constructor(private snackbarservice:SnackbarService){

}
    todosArr:Array<Itodo>=[
{
        todoItem:"js",
        todoId:"123"
},
{
    todoItem:"Angular",
    todoId:"124"
},
{
    todoItem:"React",
    todoId:"125"
}
    ]
fetchAllTodos(){
    return this.todosArr;
}
createNewPost( todo:Itodo){
this.todosArr.push(todo);
this.snackbarservice.openSnackbar(`todo item ${todo.todoItem} added successfully`);
}
    ngOnInit(): void {
    }
    RemovePost(id:string){
        let getIndex=this.todosArr.findIndex(todo=>todo.todoId==id)
console.log(getIndex)
let getobj=this.todosArr[getIndex]
this.todosArr.splice(getIndex,1);
/*let matConfig:MatSnackBarConfig={
    duration:3000,
    horizontalPosition:"left",
    verticalPosition:"top"
}
this._matsnack.open("todo item successfully removed","Close",matConfig);
*/
this.snackbarservice.openSnackbar(`todo item ${getobj.todoItem} removed successfully`);
    }

    updateTodo(todo: Itodo) {
  const index = this.todosArr.findIndex(t => t.todoId === todo.todoId);
  if (index !== -1) {
    this.todosArr[index] = todo;
  }
}

}