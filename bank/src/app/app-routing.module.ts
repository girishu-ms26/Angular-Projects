import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AdduserComponent } from './home/adduser/adduser.component';
import { ExistinguserComponent } from './home/existinguser/existinguser.component';
import { TransactiontypeComponent } from './home/existinguser/transactiontype/transactiontype.component';
import { DepositComponent } from './home/existinguser/transactiontype/deposit/deposit.component';
import { TransferComponent } from './home/existinguser/transactiontype/transfer/transfer.component';
import { WithdrawComponent } from './home/existinguser/transactiontype/withdraw/withdraw.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'adduser',component: AdduserComponent},
  {path: 'existinguser',component: ExistinguserComponent,
    children: [
      {
        path: 'Ttype',
        component: TransactiontypeComponent,
        children: [
        {
        path: 'deposit',
        component: DepositComponent,
        },
        {
        path: 'transfer',
        component: TransferComponent,
        },
        {
        path: 'withdraw',
        component: WithdrawComponent,
        }
        ]
      }
    ]
  }
];     
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
