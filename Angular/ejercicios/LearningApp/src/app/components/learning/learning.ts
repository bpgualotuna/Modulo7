import { Component } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
})
export class Learning {
  course!:Course;

  constructor(private courseService:CourseService){
    this.course = this.courseService.getCourse();
  }
}
