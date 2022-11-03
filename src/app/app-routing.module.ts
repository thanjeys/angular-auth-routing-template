import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { UserRoleGuard } from './_helpers/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren:() => import('./user/user.module').then(m => m.UserModule),
    // canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
