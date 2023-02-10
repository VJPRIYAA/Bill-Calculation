import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component';
const routes: Routes = [
  {
    path: 'menu-card',
    component: MenuCardComponent,
  },
];
@NgModule({
  declarations: [AppComponent, LoginComponent, MenuCardComponent, ItemCardComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
