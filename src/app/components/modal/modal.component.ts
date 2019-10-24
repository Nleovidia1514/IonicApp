import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PausePage } from './../../pages/pause/pause.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  

}
