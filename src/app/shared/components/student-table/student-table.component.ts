import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istudent } from '../../models/student';
import { SnackbarService } from '../../services/snackbar.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
studentArr:Array<Istudent>=[];
isEditing:boolean=false;
isRemoving: boolean = false;
@Output() edit = new EventEmitter<Istudent>();
  constructor(private _studentService:StudentService,private _snackbarService:SnackbarService) { }

  ngOnInit(): void {
    this._studentService.fetchAllStudents().subscribe({
      next:(data)=>{
console.log(data);
this.studentArr=data;
      },
      error:(err)=>{
      console.error("error");
    }   
    })
  }
  onRemove(student:Istudent){
    if (this.isEditing) return;
    this.isRemoving=true;
    let getConfirmation=confirm("Are you sure you want to remove this?")
    if(getConfirmation){
  this.studentArr.pop()
  this._snackbarService.openSnackbar("Student details removed Successfully")
    }
  }
 onEdit(student: Istudent) {
  if (this.isRemoving) return;
  this.isEditing = true;
    this.edit.emit(student); 
  }

}
