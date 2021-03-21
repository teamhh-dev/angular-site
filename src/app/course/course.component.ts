import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = [
    {
      'id': 1,
      'img': '../../assets/images/Screenshot (1).png',
      'title': 'Cousre 1',
      'description':'All about cousre 1'
    },
    {
      'id': 2,
      'img': '../../assets/images/Screenshot (2).png',
      'title': 'Cousre 2',
      'description':'All about cousre 2'
    },
    {
      'id': 3,
      'img': '../../assets/images/Screenshot (3).png',
      'title': 'Cousre 3',
      'description':'All about cousre 3'
    }
  ]
}
