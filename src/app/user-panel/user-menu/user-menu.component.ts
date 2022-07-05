import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  interval:any;
  menuList = [];
  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit(): void {

    this.getmenu();
    this.refresh();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  getmenu(){
    this._menuService.getMenuList()
      .subscribe(data => {
        console.log(data);
        this.menuList = data;
      });  

  }
  refresh() {
    this.interval = setInterval(() => {
      this.getmenu();
    }, 3000);
  }

}
