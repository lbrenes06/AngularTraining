import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { GirlsComponent } from './girls/girls.component';
import { MensComponent } from './mens/mens.component';

const routes: Routes = [
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'girls',
        component: GirlsComponent
    },
    {
        path: 'mens',
        component: MensComponent
    },
    { 
        path: '**', 
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }