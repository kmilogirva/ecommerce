import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponet } from './home-page';

describe('HomePage', () => {
  let component: HomePageComponet;
  let fixture: ComponentFixture<HomePageComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
