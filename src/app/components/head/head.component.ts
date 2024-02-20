import { Component } from '@angular/core';
import { ModalNewTransactionComponent } from '../modal-new-transaction/modal-new-transaction.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [ModalNewTransactionComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  isModalOpen: boolean = false;

  constructor() { }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
