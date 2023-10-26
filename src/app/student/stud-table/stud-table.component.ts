import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-stud-table',
  templateUrl: './stud-table.component.html',
  styleUrls: ['./stud-table.component.scss']
})
export class StudTableComponent implements OnInit {

  studentArr: Array<Istudent> = [];
  constructor(private _studentSerice: StudentService) { }

  ngOnInit(): void {
    this.studentArr = this._studentSerice.getAllStudent();
    console.log(this.studentArr);
  }

}
