import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeModule } from './feature-modules/home/home.module'
import { CoreModule } from './core/core.module'
import { HttpClientModule } from '@angular/common/http'
import { ProductsModule } from './feature-modules/products/products.module'
import { ContactModule } from './feature-modules/contact/contact.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    ContactModule,
    CoreModule,
    SharedModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
