import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/helpers/material.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { HeroComponent } from './landing/hero/hero.component';
import { FeaturesComponent } from './landing/features/features.component';
import { FooterComponent } from './landing/footer/footer.component';
import { NiveshComponent } from './nivesh/nivesh.component';
import { SigninDialogue } from './landing/signin/siginin.dialogue';
import { SignupDialogue } from './landing/signup/signup.dialogue';

import { AuthInterceptorProviders } from './interceptors/auth.interceptor';
import { ErrorInterceptorProviders } from './interceptors/error.interceptor';
import { SidebarComponent } from './nivesh/sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    FooterComponent,
    NiveshComponent,
    SigninDialogue,
    SignupDialogue,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [AuthInterceptorProviders, ErrorInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
