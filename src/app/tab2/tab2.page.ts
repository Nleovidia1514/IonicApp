import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PausePage } from './../pages/pause/pause.page';

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
  shipsRef = [];
  idCounter: number = 0;
  shipsTimeout;
  score: number = 150;
  animationFrame; 
  gamePaused: boolean = false;
  spawnRate: number = 5000;
  cannonClasses: string[] = ['cannon'];

  constructor(public modalController: ModalController) {
    this.shipsTimeout = setTimeout(this.spawnShip, this.spawnRate);
    this.updateGame();
  }

  updateGame = (): void => {
    this.shipsRef.forEach(ship => {
      ship.moveShip();
      if (((ship.shipX < -80 && ship.facing==='left') || (ship.shipX > window.innerWidth && ship.facing==='right')) && !ship.dying) 
        this.killShip(ship, false); 
    });  
    if (this.score >= 50 && this.score <= 100) {
      this.spawnRate = 3000;
    } else if (this.score > 100 && this.score <= 150) {
      this.spawnRate = 2000;
    } else if (this.score > 150 && this.score <= 200) {
      this.spawnRate = 1500;
    } else if (this.score > 200 && this.score <= 300) {
      this.spawnRate = 800;
    }
    this.animationFrame = requestAnimationFrame(this.updateGame);
  }

  pauseGame = (): void => {
    if(!this.gamePaused) {
      cancelAnimationFrame(this.animationFrame);
      this.gamePaused = true;
      clearTimeout(this.shipsTimeout);
      this.presentModal();
    } else {
      this.gamePaused = false;
      this.shipsTimeout = setTimeout(this.spawnShip, this.spawnRate);
      this.updateGame();
    }
  }

  fireCannon = (): void => {
    this.cannonClasses.push('fire');
    setTimeout(() => this.cannonClasses.pop(), 600);
  }

  presentModal = async () => {
    const modal = await this.modalController.create({
      component: PausePage,
      showBackdrop: true,
    });
    modal.onDidDismiss().then(r => {
      this.pauseGame();
    })
    return await modal.present();
  }

  spawnShip = (): void => {
    this.ships.push({ id: this.idCounter });
    this.idCounter++;
    this.shipsTimeout = setTimeout(this.spawnShip, this.spawnRate);
  }

  killShip = (ship, hit: boolean = true): void => {  
    if (hit) this.score += 5;
    ship.dying = true;
    this.shipsRef[this.shipsRef.findIndex(s => s.id === ship.id )].killShip();                                                                                   
    setTimeout(() => {
      let refIndex = this.shipsRef.findIndex(s => s.id === ship.id );
      this.shipsRef.splice(refIndex, 1);
      this.ships.splice(this.ships.findIndex(s => s.id === ship.id), 1);
    }, 1200);
  }
}
