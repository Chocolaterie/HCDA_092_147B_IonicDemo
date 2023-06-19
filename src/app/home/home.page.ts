import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

class Person {

  public firstname? : String;

  constructor(_firstname : String){
    this.firstname = _firstname;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {

  public personIsaac = new Person("Isaac");
  public personToto = new Person("Toto");
  public displayButton = true;

  constructor() {

  }

  public testMemoire(){
    // assigner la mémoire
    this.personToto = this.personIsaac;
    // changer la valeur 
    this.displayButton = false;
  }

}
