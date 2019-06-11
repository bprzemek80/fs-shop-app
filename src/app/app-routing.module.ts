import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeViewComponent } from './feature-modules/home/view/home-view.component'
import { ProductViewComponent } from './feature-modules/products/view/product-view.component'
import { ContactViewComponent } from './feature-modules/contact/view/contact-view.component'

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactViewComponent,
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
