import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoAboutComponent } from './demo-about.component';

describe('DemoAboutComponent', () => {
  let component: DemoAboutComponent;
  let fixture: ComponentFixture<DemoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
