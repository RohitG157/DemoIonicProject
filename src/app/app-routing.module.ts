import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginAuthGuardService } from './common/services/login-auth-guard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupPageModule),
        canActivate: [LoginAuthGuardService]
    },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
