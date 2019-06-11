import { ModuleWithProviders, NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material'
import { MatCardModule} from '@angular/material/card'

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
  ],
})

export class FsMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMaterialModule,
    }
  }
}
