import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-modal-new-transaction',
  standalone: true,
  imports: [],
  templateUrl: './modal-new-transaction.component.html',
  styleUrl: './modal-new-transaction.component.css'
})
export class ModalNewTransactionComponent {
  @Input() isOpen: boolean = false; // Adicionando um valor padrão
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  close() {
    this.closeModal.emit();
  }

}
