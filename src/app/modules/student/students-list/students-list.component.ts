import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  tableHeader = {
    rowNumbers: '#',
    studentName: 'Student Name',
    studentAge: 'Age',
    socialMedia: 'Social Media',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
  };

  getObjectValues(object: Object) {
    return Object.values(object);
  }
}
