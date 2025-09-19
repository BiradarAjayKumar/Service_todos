import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
@ViewChild("studentForm") studentForm!:NgForm
isEditing:boolean=false;
 editStudentId: string = '';
  constructor(private _uuidService:UuidService,private _studentService:StudentService) { }

  ngOnInit(): void {
  }
  onAdd(){
    if(this.studentForm.valid && this.studentForm.value!==""){
     // let stdObj=this.studentForm.value;
     let stdObj={
      ...this.studentForm.value,
      contact:this.studentForm.controls['contact'].value,
      stdId:this._uuidService.generateUUID()
     }
     this._studentService.createNewPost(stdObj)
      console.log(stdObj)
         this.studentForm.reset()
    }
    else{
      alert('Enter valid details');
    }
  }

  onUpdate(){
    if (this.studentForm.valid) {
      const updatedStudent: Istudent = {
        ...this.studentForm.value,
        stdId: this.editStudentId 
      };
      this._studentService.updateStudent(updatedStudent);
      this.studentForm.reset();
      this.isEditing = false;
      this.editStudentId = '';
    } else {
      alert('Enter valid details');
    }
  }

  onEdit(student: Istudent) {
    this.isEditing = true;
    this.editStudentId = student.stdId; 
    this.studentForm.setValue({
      fname: student.fname,
      lname: student.lname,
      contact: student.contact,
      email: student.email,
      gender: student.gender
    });
  }
 

  }



