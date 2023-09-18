import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsListComponent } from './generics-list.component';

describe('GenericsListComponent', () => {
  let component: GenericsListComponent;
  let fixture: ComponentFixture<GenericsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericsListComponent]
    });
    fixture = TestBed.createComponent(GenericsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
