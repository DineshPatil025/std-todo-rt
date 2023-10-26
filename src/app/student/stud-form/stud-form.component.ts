import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istudent } from 'src/app/shared/models/student';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.scss']
})
export class StudFormComponent implements OnInit {

studForm !: FormGroup

  constructor( private _studService : StudentService,
                private _snackbar : SnackbarService) { }

  ngOnInit(): void {
    this.createStudForm()
  }
  createStudForm(){
    this.studForm = new FormGroup({
      stdfname: new FormControl(null, [Validators.required]),
      stdlname: new FormControl(null, [Validators.required]),
      stdemail: new FormControl(null, [Validators.required]),
      stdcontact: new FormControl(null, [Validators.required])
    })
  }

  onStudAdd(){
    if(this.studForm.valid){
      let newStdObj : Istudent = this.studForm.value
    console.log(newStdObj);
    this._studService.addStudent(newStdObj)
    this.studForm.reset()
    this._snackbar.openSnackBar(` ${newStdObj.stdfname} details added successfully`,'close')
    }
  }
}
