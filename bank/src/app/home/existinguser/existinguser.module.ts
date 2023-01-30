import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { existinguserRoutingModule } from './existinguser-routing.module';

import { ExistinguserComponent } from './existinguser.component';
import { TransactiontypeComponent } from './transactiontype/transactiontype.component';
import { DepositComponent } from './transactiontype/deposit/deposit.component';
import { WithdrawComponent } from './transactiontype/withdraw/withdraw.component';
import { TransferComponent } from './transactiontype/transfer/transfer.component';




@NgModule({
  declarations: [ExistinguserComponent,TransactiontypeComponent, DepositComponent, WithdrawComponent, TransferComponent],
  imports: [
    CommonModule,
    existinguserRoutingModule
  ]
})
export class ExistinguserModule { }
