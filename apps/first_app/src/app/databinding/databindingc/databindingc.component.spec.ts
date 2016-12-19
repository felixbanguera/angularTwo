/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatabindingcComponent } from './databindingc.component';

describe('DatabindingcComponent', () => {
  let component: DatabindingcComponent;
  let fixture: ComponentFixture<DatabindingcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
