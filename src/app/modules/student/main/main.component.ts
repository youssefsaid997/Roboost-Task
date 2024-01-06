import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  isModalOpen=false;
  constructor(){}
  onModalToggle(){
    this.isModalOpen = !this.isModalOpen
  }

}
