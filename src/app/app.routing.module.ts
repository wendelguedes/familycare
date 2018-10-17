import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuardPricipal } from './core/auth/auth-principal.guard';

const APP_ROUTES: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'principal', 
        component: PrincipalComponent,
        canActivate: [AuthGuardPricipal]
    },
    {
        path: '**', 
        component: NotFoundComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES,{useHash:true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}