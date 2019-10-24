import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pause',
  templateUrl: './pause.page.html',
  styleUrls: ['./pause.page.scss'],
})
export class PausePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal = () => {
    this.modalController.dismiss();
  }

}
