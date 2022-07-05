import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './_guards/user-auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminAuthGuard } from './_guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminAvailabilityComponent } from './admin-panel/admin-availability/admin-availability.component';
import { AdminSalesReportComponent } from './admin-panel/admin-sales-report/admin-sales-report.component';
import { AdminMenuComponent } from './admin-panel/admin-menu/admin-menu.component';
import { AdminOrderComponent } from './admin-panel/admin-order/admin-order.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'admin',
    canActivateChild: [AdminAuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: AdminDashboardComponent },
      {
        path: '',
        component: AdminPanelComponent,
        children: [
          {path: 'availability', component: AdminAvailabilityComponent},
          {path: 'sales-reports', component: AdminSalesReportComponent},
          { path: 'menu', component: AdminMenuComponent },
          { path: 'orders', component: AdminOrderComponent }
        ]
      }

    ]
  },
  {
    path: 'user',
    canActivateChild: [UserAuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: UserPanelComponent }
    ]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
