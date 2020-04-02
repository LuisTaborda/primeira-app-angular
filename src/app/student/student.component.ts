import { Component, OnInit, Input } from '@angular/core';
import {Student} from './student.model'
@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.student.isJedi){
      alert(`Student: ${this.student.name} \nIs Jedi: ${this.student.isJedi ? 'yes' : 'no'} \nTemple: ${this.student.temple}`);
    }
    else{
      alert(`Student: ${this.student.name} \nIs Jedi: ${this.student.isJedi ? 'yes' : 'no'}`);
    }
  }
}
