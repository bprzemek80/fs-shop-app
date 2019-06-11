import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu/menu.component'
import { FsMaterialModule } from '../fs-material.module'
import { HeaderUserInfoComponent } from './header-user-info/header-user-info.component';
import { ProductCardComponent } from './product-card/product-card.component'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  declarations: [
    MenuComponent,
    HeaderUserInfoComponent,
    ProductCardComponent
  ],
  exports: [
    MenuComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FsMaterialModule.forRoot()
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    }
  }
}
