import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";
import { UserModule } from './user/user.module';


@NgModule({
  imports: [ClientModule,EnterpriseModule,UserModule],
  declarations: [],
})
export class PagesModule {}
