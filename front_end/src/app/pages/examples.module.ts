import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EeolicaComponent } from './eeolica/eeolica.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ParqueEolicoPenonomeComponent } from './eeolica/parque-eolico-penonome/parque-eolico-penonome.component';
import { AgmCoreModule } from '@agm/core';
import { EhidraulicaComponent } from './ehidraulica/ehidraulica.component';
import { EhbayanoComponent } from './ehidraulica/ehbayano/ehbayano.component';
import { EhfortunaComponent } from './ehidraulica/ehfortuna/ehfortuna.component';
import { EtermicaComponent } from './etermica/etermica.component';
import { EcbahiaminasComponent } from './etermica/ecbahiaminas/ecbahiaminas.component';
import { EcPanAmComponent } from './etermica/ec-pan-am/ec-pan-am.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
            AgmCoreModule.forRoot({
      apiKey: ''
    }),

    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        EeolicaComponent,
        ParqueEolicoPenonomeComponent,
        EhidraulicaComponent,
        EhbayanoComponent,
        EhfortunaComponent,
        EtermicaComponent,
        EcbahiaminasComponent,
        EcPanAmComponent,
    ]
})
export class ExamplesModule { }
