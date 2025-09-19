import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Istudent } from "../models/student";
import { SnackbarService } from "./snackbar.service";



@Injectable({
    providedIn:"root"
})
export class StudentService{
studentArr:Array<Istudent>=[
    {
        stdId:"1",
        fname:"Biradar",
        lname:"AjayKumar",
        contact:7702461480,
        email:"biradarajaykumar02166@gmail.com",
        gender:"male"
    }
]
    constructor(private _snackbarService:SnackbarService){    
    }
    fetchAllStudents():Observable<Istudent[]>{
        return of(this.studentArr)
    }
    createNewPost(stdObj:Istudent){
  this.studentArr.push(stdObj)
  this._snackbarService.openSnackbar("Student details added successfully")
    }
   updateStudent(updatedStudent: Istudent): void {
    const index = this.studentArr.findIndex(s => s.stdId === updatedStudent.stdId);
    if (index !== -1) {
      this.studentArr[index] = updatedStudent;
      this._snackbarService.openSnackbar("Student details updated successfully");
    }
  }


}