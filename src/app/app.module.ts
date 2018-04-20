import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GirlsComponent } from './girls/girls.component';
import { MensComponent } from './mens/mens.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { GirlsViewComponent } from './girls/girls-view/girls-view.component';
import { GirlsService } from './girls/girls.service';
import { MensService } from './mens/mens.service';
import { MensAddComponent } from './mens/mens-add/mens-add.component';
import { FooterComponent } from './footer/footer.component';
import { GirlsAddComponent } from './girls/girls-add/girls-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GirlsComponent,
    MensComponent,
    HelpComponent,
    MenuComponent,
    GirlsViewComponent,
    MensAddComponent,
    FooterComponent,
    GirlsAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GirlsService, MensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
