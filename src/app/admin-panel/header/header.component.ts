import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titles = [
    'Menu Customization',
    'Today Availability',
    'Orders',
    'Sales Reports',
    'Dashboard'
  ]
  title = '';
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    this.changeTitle();
  // this.title = this.router.url.split('/')[2];
  }


  changeTitle(){
    let endOfUrl = this.router.url.split('/')[2];
    if(endOfUrl === 'menu')
      this.title = this.titles[0];
    else if(endOfUrl === 'availability')
      this.title = this.titles[1];
    else if (endOfUrl === 'orders')
      this.title = this.titles[2];
    else if (endOfUrl === 'sales-reports')
      this.title = this.titles[3];
    else if(endOfUrl === 'dashboard')
      this.title = this.titles[4];

  }
}
