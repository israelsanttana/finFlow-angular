import { Component } from '@angular/core';
import { HeadComponent } from './components/head/head.component';
import { ModalNewTransactionComponent } from './components/modal-new-transaction/modal-new-transaction.component';
import { SearchTransactionsComponent } from './components/search-transactions/search-transactions.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeadComponent,
    TransactionsComponent,
    SearchTransactionsComponent,
    ModalNewTransactionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finFlow-angular';
}
