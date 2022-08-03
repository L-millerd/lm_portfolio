import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { gsap } from 'gsap';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CakeryHomeComponent } from './cakery/cakery-home/cakery-home.component';
import { CakeryAboutComponent } from './cakery/cakery-about/cakery-about.component';
import { CakeryNavComponent } from './cakery/cakery-nav/cakery-nav.component';
import { CakeryFooterComponent } from './cakery/cakery-footer/cakery-footer.component';
import { CakeryProductsComponent } from './cakery/cakery-products/cakery-products.component';
import { OrderComponent } from './cakery/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    TestComponent,
    SingleProjectComponent,
    CakeryHomeComponent,
    CakeryAboutComponent,
    CakeryNavComponent,
    CakeryFooterComponent,
    CakeryProductsComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
