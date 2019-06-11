import { Component, OnInit } from '@angular/core'
import { ProductResourceService } from '../../../core/services/product-resource.service'
import { Product } from '../../../shared/models/product'

@Component({
  selector: 'fs-home',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  private products: Product[] = []

  constructor(private productResourceService: ProductResourceService) {
  }

  ngOnInit() {
    this.productResourceService.getProducts()
      .pipe(
      )
      .subscribe(products => {
        this.products = products
      })
  }
}
