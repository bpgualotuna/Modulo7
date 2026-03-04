import { Component } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course';
import { CourseComponent } from '../course/course';
import { StudentListComponent } from '../student-list/student-list';

@Component({
  selector: 'app-learning',
  imports: [CourseComponent,StudentListComponent],
  templateUrl: './learning.html',
})
export class Learning {
  course!:Course;

  constructor(private courseService:CourseService){
    this.course = this.courseService.getCourse();
  }
}
