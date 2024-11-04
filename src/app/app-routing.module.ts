import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DescriptionComponent } from './description/description.component';
import { OfferComponent } from './offer/offer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ChatSsupportComponent } from './chat-ssupport/chat-ssupport.component';
import { StoresComponent } from './stores/stores.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'place-order', component: PlaceOrderComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'chat-ssupport', component: ChatSsupportComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'login-screen', component: LoginScreenComponent},
  {path: 'cart', component: CartComponent},
  // iss ko ng serve kerte he login page direct show ho jaye iss leye iss ko use keya hai
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo:'/home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
