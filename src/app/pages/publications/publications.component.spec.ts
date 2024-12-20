import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PublicationsComponent} from './publications.component';

describe('TalksComponent', () => {
  let component: PublicationsComponent;
  let fixture: ComponentFixture<PublicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationsComponent]
    });
    fixture = TestBed.createComponent(PublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
