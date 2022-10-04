import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditEntryComponent } from './view-edit-entry.component';

describe('ViewEditEntryComponent', () => {
  let component: ViewEditEntryComponent;
  let fixture: ComponentFixture<ViewEditEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
