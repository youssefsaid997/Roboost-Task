import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { IStudent } from 'src/app/models/Studet';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
searchQuery=""
@Output() searchChange = new EventEmitter()

constructor(private studentService:StudentService){}

ngDoCheck(){
  if(this.searchQuery){
    this.searchChange.emit(this.searchQuery)
  }
}


}
