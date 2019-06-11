import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductPresenterComponent } from './product-presenter/product-presenter.component'
import { HomeViewComponent } from './view/home-view.component'
import { SharedModule } from '../../shared/shared.module'
import { MatCardModule } from '@angular/material'


@NgModule({
  declarations: [
    ProductPresenterComponent,
    HomeViewComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MatCardModule,
  ]
})
export class HomeModule {
}
