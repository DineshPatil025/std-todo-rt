import { Injectable } from '@angular/core';
import { Istudent } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studArr: Array<Istudent> = [
    {
      stdfname: "James",
      stdlname: "Bond",
      stdemail: "jb@gmail.com",
      stdcontact: 11111111

    }
  ]

  constructor() { }

  getAllStudent() {
    return this.studArr
  }
  addStudent(stud: Istudent) {
    this.studArr.push(stud)
    console.log(this.studArr);
    
  }
}
