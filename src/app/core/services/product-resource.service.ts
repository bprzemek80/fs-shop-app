import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../../shared/models/product'
import { map } from 'rxjs/operators'

const apiUrl = environment.apiUrl

@Injectable()
export class ProductResourceService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiUrl}/products`)
      .pipe(
        map(data => data)
      )
  }

}
