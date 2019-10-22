import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pirate-ship',
  templateUrl: './pirate-ship.component.html',
  styleUrls: ['./pirate-ship.component.scss'],
})
export class PirateShipComponent implements OnInit {

  shipX: number = 0;
  classes: string[] = ['pirate-ship'];
  @Input('ship') ship;
  @Output('hit') hit = new EventEmitter<boolean>();
  shipY: number = 100;
  shipInterval;

  constructor() { }

  ngOnInit() {
    let facing = Math.floor(Math.random()*2) === 1 ? 'left' : 'right';
    this.classes.push(facing);
    if (facing === 'left') {
      this.shipInterval = setInterval(() => {
        this.shipX += 2;
      }, 16.666);
    } else {
      this.shipX = window.innerWidth;
      this.shipInterval = setInterval(() => {    
        this.shipX -= 2;
      }, 16.666);
    }
    
  }

  killShip = () => {
    clearInterval(this.shipInterval);
    this.classes.push('explosion');
  }

}
