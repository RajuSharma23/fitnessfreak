import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemHeaderComponent } from './item-header/item-header.component';
import { FormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DescriptionComponent } from './description/description.component';
import { OfferComponent } from './offer/offer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { StoresComponent } from './stores/stores.component';
import { ChatSsupportComponent } from './chat-ssupport/chat-ssupport.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OfferComponent,
    ItemHeaderComponent,
    FooterComponent,
    PlaceOrderComponent,
    DescriptionComponent,
    DescriptionComponent,
    OfferComponent,
    ThankYouComponent,
    StoresComponent,
    ChatSsupportComponent,
    LoginScreenComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
