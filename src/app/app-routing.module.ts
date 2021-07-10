/**
 * Title: app-routing.module.ts
 * Author: James Pinson
 * Date: 8 July 2021
 * Description: This is our routing module.
 */


//Here we import all of our components.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

//Here we set the path for each component as well as the child components.
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '',
        component: HomeComponent
      }
    ],
    canActivate: [SignInGuard]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent

      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Here we export to routing module to the rest of the application.
export class AppRoutingModule { }
