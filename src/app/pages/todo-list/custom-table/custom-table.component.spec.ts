import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTwoDimensionComponent } from './custom-table.component';

describe('TableTwoDimensionComponent', () => {
  let component: TableTwoDimensionComponent;
  let fixture: ComponentFixture<TableTwoDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTwoDimensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTwoDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
