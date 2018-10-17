import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        PrincipalComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PrincipalModule{}