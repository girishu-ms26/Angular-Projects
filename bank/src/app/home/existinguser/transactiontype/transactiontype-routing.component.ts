import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactiontypeComponent } from './transactiontype.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
const routes: Routes = [
    {
        path: 'Ttype',
        component: TransactiontypeComponent,
        children: [
            {
                path: 'deposit',
                component: DepositComponent
            },
            {
              path: 'withdraw',
              component: WithdrawComponent
            },
            {
              path: 'transfer',
              component: TransferComponent
            }
        ]
    }
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class existinguserRoutingModule { }
