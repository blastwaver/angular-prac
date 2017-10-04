import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = {
    title: "The Complete Angular Courses",
    rating: 4.9745,
    students: 30123,
    price: 190.50,
    releseDate: new Date(2016, 3, 1)
  }

  text = "some text is here hahaha sdf sadfk sdf  ds fas df as df asd f sad f as f as f as f asd f a ds f as fs";
  colSpan = 2;
  isActive = true;
  email;
  constructor(service: CoursesService) {
    // this.courses = service.getCourses();  
  }

  onSave($event) {
    console.log("Button was clicked", $event);
    $event.stopPropagation();

  }  

  onDiv() {
    console.log("div was clicked");
  }

  onKeyup() {
     console.log(this.email);
  }
}
