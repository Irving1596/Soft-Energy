import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { EeolicaComponent } from './pages/eeolica/eeolica.component';
import {ParqueEolicoPenonomeComponent } from './pages/eeolica/parque-eolico-penonome/parque-eolico-penonome.component';
import { EhidraulicaComponent } from './pages/ehidraulica/ehidraulica.component';
import { EhbayanoComponent } from './pages/ehidraulica/ehbayano/ehbayano.component';
import { EhfortunaComponent } from './pages/ehidraulica/ehfortuna/ehfortuna.component';
import { EtermicaComponent } from './pages/etermica/etermica.component';
import { EcbahiaminasComponent } from './pages/etermica/ecbahiaminas/ecbahiaminas.component';
import { EcPanAmComponent } from './pages/etermica/ec-pan-am/ec-pan-am.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'eeolica',      component: EeolicaComponent },
    { path: 'eeolicapenonome',      component: ParqueEolicoPenonomeComponent },
    { path: 'ehidraulica',      component: EhidraulicaComponent },
    { path: 'ehidraulicabayano',      component: EhbayanoComponent },
    { path: 'ehidraulicafortuna',      component: EhfortunaComponent },
    { path: 'econvencional',      component: EtermicaComponent },
    { path: 'ecbahiaminas',      component: EcbahiaminasComponent },
    { path: 'ecPanAm',      component: EcPanAmComponent }      
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
