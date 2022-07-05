import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  menuList = [];
  constructor(
    private _menuService: MenuService
  ) { }

  ngOnInit(): void {

    this.getmenu();
  }

  getmenu(){
    this._menuService.getMenuList()
      .subscribe(data => {
        console.log(data);
        this.menuList = data;
      });
  }

  onSubmit(){
    console.log(this.menuList);
    this._menuService.updateMenuAvailibility(this.menuList);

  }
}
