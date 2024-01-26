import { NgModule } from '@angular/core';


import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  imports:[
    CommonModule,
    RouterModule
  ]
})
export class ClientModule {}
