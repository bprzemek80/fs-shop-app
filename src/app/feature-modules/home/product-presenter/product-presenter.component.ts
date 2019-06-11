import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Product } from '../../../shared/models/product'
import { Subject, timer } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'fs-product-presenter',
  templateUrl: './product-presenter.component.html',
  styleUrls: ['./product-presenter.component.scss']
})
export class ProductPresenterComponent implements OnInit, OnDestroy {

  @Input()
  products: Product[]

  productToShow: Product[] = []

  private destroySubject$ = new Subject()

  constructor() {
  }

  ngOnInit() {
    this.prepareProductForShow()
  }

  private prepareProductForShow() {

    const productsLength = this.products.length
    let numberArray = Array.from(Array(productsLength).keys())
    let max = productsLength
    let productsForShow = []

    timer(500, 30 * 1000)
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe(() => {
        for (let i = 0; i < 3; i++) {
          const index = Math.round(Math.random() * (max - 1))

          productsForShow.push(this.products[numberArray.splice(index, 1)[0]])
          max--

          if (max <= 3) {
            numberArray = Array.from(Array(productsLength).keys())
            max = productsLength
          }
        }

        this.productToShow = productsForShow
        productsForShow = []
      })
  }

  ngOnDestroy(): void {
    this.destroySubject$.next()
    this.destroySubject$.complete()
  }

}
