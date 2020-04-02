import { Component } from '@angular/core';

import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students: Student[] = [
    { 
      name:'Luke', 
      isJedi:true, 
      temple:'Coruscant', 
      image:'https://avatarfiles.alphacoders.com/217/217735.jpg'
    },
    {
      name:'Leia', 
      isJedi:false, 
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaBjLrNCyuR07ajS43OMykin7QKa5sgIXuIh6O3h35I_6_bE8q&usqp=CAU'
    },
    {
      name:'Han Solo', 
      isJedi:false, 
      image:'https://lh3.googleusercontent.com/proxy/Mf9_Xl69mHtlqnuJp58p-ia64Qt7HpPdCxN-oHyZPBxNDeD5h4hTmCzCFK606eyyGHn8nU1d9L4zxb2ibvKwZ7jlC2lh4jJjWUAUagRkqpwkuGTiunhlZ6CBDFLBDTlj2tz1Qb5Q7IA8UJNiQb8Z_2bJoA'
    }
  ]

 
}
