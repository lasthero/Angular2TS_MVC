﻿import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HomeComponent} from './components/home.component';
import {UserComponent} from './components/user.component';

import {UserService} from './Service/user.service';

//module meta data
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, UserComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }