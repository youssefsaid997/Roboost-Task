import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-list';
  isModalOpen=false;
  constructor(){}


  onModalToggle(){
    this.isModalOpen = !this.isModalOpen
  }
}
