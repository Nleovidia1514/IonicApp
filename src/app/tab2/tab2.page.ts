import { Component } from '@angular/core';

interface Ship {
  id: number
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ships: Ship[] = [];
  idCounter: number = 0;
  shipsInterval;

  constructor() {
    this.shipsInterval = setInterval(() => {
      this.ships.push({ id: this.idCounter });
      this.idCounter++;
    }, 5000);
  }

  killShip = (ship) => {                                                                                                      
    setTimeout(() => this.ships.splice(this.ships.findIndex(s => s.id === ship.id), 1), 1200);
  }

}
