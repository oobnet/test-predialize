import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { PagesModule } from "../pages/pages.module";
import {NavbarComponent} from './navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    PagesModule,
    BrowserModule,
    RouterModule,

    // LayoutModule,
    // BrowserAnimationsModule,
    // FlexLayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,

    // MatSidenav,
  ]
})
export class NavbarModule {}
