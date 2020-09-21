import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 99 Fundamentals',
      description: 'Learn the fundamentals of Angular 99',
      percentComplete: 96,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse(): void {
    this.selectedCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favourite: false
    };
  }

  selectCourse(course): void{
    console.log('Selected courseL ', course);
    this.selectedCourse = course;
  }

  deleteCourse(id): void {
    console.log('course deleted ', id);
  }

  cancel(): void {
    this.resetSelectedCourse();
  }

  saveCourse(): void {
    console.log('Save course');
  }
}
