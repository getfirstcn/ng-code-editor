import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCodeEditorComponent } from './ng-code-editor.component';

describe('NgCodeEditorComponent', () => {
  let component: NgCodeEditorComponent;
  let fixture: ComponentFixture<NgCodeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCodeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
