import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistinguserComponent } from './existinguser.component';
import { TransactiontypeComponent } from './transactiontype/transactiontype.component';
import { DepositComponent } from './transactiontype/deposit/deposit.component';
import { TransferComponent } from './transactiontype/transfer/transfer.component';
import { WithdrawComponent } from './transactiontype/withdraw/withdraw.component';
const routes: Routes = [
    {
        path: 'existinguser',
        component: ExistinguserComponent,
    },
    {
        path: 'Ttype',
        component: TransactiontypeComponent,
        children: [
            {
                path: 'deposit',
                component: DepositComponent
            },
            {
                path: 'transfer',
                component: TransferComponent
            },
            {
                path: 'withdraw',
                component: WithdrawComponent
            }
        ]
    }
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class existinguserRoutingModule { }
