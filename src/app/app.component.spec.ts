import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {activateRouteProvider} from "../test/activate-route-provider";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [activateRouteProvider],
    imports: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
