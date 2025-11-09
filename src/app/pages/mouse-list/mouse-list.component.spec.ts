import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseListComponent } from './mouse-list.component';

describe('MouseListComponent', () => {
  let component: MouseListComponent;
  let fixture: ComponentFixture<MouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
