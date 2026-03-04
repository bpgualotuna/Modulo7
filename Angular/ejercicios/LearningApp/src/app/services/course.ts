import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { courseData } from '../data/couse.data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  
  private course:Course = courseData;

  getCourse():Course{
    return this.course;
  }

}
