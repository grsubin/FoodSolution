import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesReportComponent } from './admin-sales-report.component';

describe('AdminSalesReportComponent', () => {
  let component: AdminSalesReportComponent;
  let fixture: ComponentFixture<AdminSalesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
