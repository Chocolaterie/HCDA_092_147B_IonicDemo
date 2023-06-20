import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoFilmPage } from './demo-film.page';

describe('DemoFilmPage', () => {
  let component: DemoFilmPage;
  let fixture: ComponentFixture<DemoFilmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemoFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
