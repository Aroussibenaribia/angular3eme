import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJoueurComponent } from './update-joueur.component';

describe('UpdateJoueurComponent', () => {
  let component: UpdateJoueurComponent;
  let fixture: ComponentFixture<UpdateJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJoueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
