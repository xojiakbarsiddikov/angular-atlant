import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CarComponent } from './components/car/car.component';
import {SwiperModule} from "swiper/angular";
import { ReviewComponent } from './components/review/review.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import { FooterBtnComponent } from './components/footer-btn/footer-btn.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ThanksComponent } from './components/thanks/thanks.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMainComponent,
    ProductsComponent,
    CardComponent,
    CardProductsComponent,
    CarComponent,
    ReviewComponent,
    AccordionComponent,
    FooterBtnComponent,
    ThanksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    MatSlideToggleModule,
    CdkAccordionModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
