import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPartsComponent } from './pc-parts.component';

describe('PcPartsComponent', () => {
  let component: PcPartsComponent;
  let fixture: ComponentFixture<PcPartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcPartsComponent]
    });
    fixture = TestBed.createComponent(PcPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
