/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LlajuComponent } from './llaju.component';

describe('LlajuComponent', () => {
  let component: LlajuComponent;
  let fixture: ComponentFixture<LlajuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlajuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlajuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
