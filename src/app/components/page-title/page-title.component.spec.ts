import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageTitleComponent} from './page-title.component';
import {activateRouteProvider} from "../../../test/activate-route-provider";

describe('PageTitleComponent', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<PageTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [activateRouteProvider],
      imports: [PageTitleComponent]
    });
    fixture = TestBed.createComponent(PageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
