import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'fs-header-user-info',
  templateUrl: './header-user-info.component.html',
  styleUrls: ['./header-user-info.component.scss']
})
export class HeaderUserInfoComponent implements OnInit {

  userName = 'Alojzy Jeż'

  constructor() {
  }

  ngOnInit() {
  }

}
