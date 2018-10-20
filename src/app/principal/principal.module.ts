import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal.component';
import { RouterModule } from '@angular/router';
import { NovoMedicamentoComponent } from './novo-medicamento/novo-medicamento.component';
import { PrincipalRoutingModule } from './principal.rounting.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations:[
        PrincipalComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        NovoMedicamentoComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        PrincipalRoutingModule,
        ReactiveFormsModule,
        FormsModule, 
        VmessageModule
    ]
})
export class PrincipalModule{}