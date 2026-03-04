import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr [student-list]',
  imports: [],
  templateUrl: './student-list.html',
})
export class StudentListComponent {
  @Input() student!:Student;

}
