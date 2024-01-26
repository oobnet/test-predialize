import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { ClientComponent } from "./pages/client/client.component";
import { EnterpriseComponent } from "./pages/enterprise/enterprise.component";

import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
        {
          path: 'client',
          component: ClientComponent
        },
        {
          path: 'user/:id',
          component: UserComponent
        },
        {
      path: 'enterprise',
      component: EnterpriseComponent
    }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
