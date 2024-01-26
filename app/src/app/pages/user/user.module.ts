import { NgModule } from '@angular/core';


import { UserComponent } from './user.component';
import { ClientService } from 'src/app/services/client.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [UserComponent],
  providers: [ClientService],
  imports:[
    CommonModule
  ]
})
export class UserModule {}
