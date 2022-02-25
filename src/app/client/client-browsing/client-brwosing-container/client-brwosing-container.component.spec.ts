import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBrwosingContainerComponent } from './client-brwosing-container.component';

describe('ClientBrwosingContainerComponent', () => {
  let component: ClientBrwosingContainerComponent;
  let fixture: ComponentFixture<ClientBrwosingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBrwosingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBrwosingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
