import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatioonDialogComponent } from './confirmation-dialog.component';

describe('ConfirmatioonDialogComponent', () => {
  let component: ConfirmatioonDialogComponent;
  let fixture: ComponentFixture<ConfirmatioonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmatioonDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmatioonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
