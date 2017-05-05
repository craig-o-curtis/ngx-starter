import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../main/home/home.component';
import { FormsComponent } from '../main/forms/forms.component';

// top-level routing, child modules can use .forChild() AppRoutingModule
// consult my StackOverflow question: http://stackoverflow.com/questions/42612189/populating-a-child-router-outlet-angular2

// LAZY LOADING -- just use loadChildren and provide the path ''
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', pathMatch: 'full', component: HomeComponent },
      { path: 'forms', pathMatch: 'full', component: FormsComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
