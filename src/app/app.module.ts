import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AuthenticationService } from './_services/authentication.service';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminMenuComponent } from './admin-panel/admin-menu/admin-menu.component';
import { AdminOrderComponent } from './admin-panel/admin-order/admin-order.component';
import { AdminSalesReportComponent } from './admin-panel/admin-sales-report/admin-sales-report.component';
import { AdminAvailabilityComponent } from './admin-panel/admin-availability/admin-availability.component';
import { UserMenuComponent } from './user-panel/user-menu/user-menu.component';
import { UserOrderComponent } from './user-panel/user-order/user-order.component';
import { MenuService } from './_services/menu.service';
import { OrderService } from './_services/order.service';
import { HeaderComponent } from './admin-panel/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminPanelComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    UserPanelComponent,
    AdminMenuComponent,
    AdminOrderComponent,
    AdminSalesReportComponent,
    AdminAvailabilityComponent,
    UserMenuComponent,
    UserOrderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, MenuService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
