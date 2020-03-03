import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {MainComponent} from './main/main.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'Create', component: CreateComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
