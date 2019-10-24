import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pirate-ship',
  templateUrl: './pirate-ship.component.html',
  styleUrls: ['./pirate-ship.component.scss'],
})
export class PirateShipComponent implements OnInit {

  classes: string[] = ['pirate-ship'];
  @Input('ship') ship;
  @Output('hit') hit = new EventEmitter<boolean>();
  @Input('shipsArray') ships: this[];
  @Input('id') id: number;
  shipX: number = 0;
  shipY: number;
  facing;
  alive = true;

  constructor() { }

  ngOnInit() {
    this.ships.push(this);
    this.facing = Math.floor(Math.random() * 2) === 1 ? 'left' : 'right';
    this.shipY = (Math.random() * 230) + (window.innerHeight * 0.2);
    if (this.facing === 'left') this.shipX = window.innerWidth;
    this.classes.push(this.facing);
  }

  moveShip = () => {
    if (this.alive) {
      if (this.facing === 'right') {
        this.shipX += 2;
      } else {
        this.shipX -= 2;
      }
    }
  }

  killShip = () => {
    this.alive = false;
    this.classes.push('explosion');
  }

}
