import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NasaService } from './core/services/nasa.service';
import { CardComponent } from './core/components/card/card.component';

describe( 'AppComponent', () => {
  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [
        AppComponent,
        CardComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule,
      ],
      providers:[NasaService]
    } ).compileComponents();
  } );

  it( 'should create the app', () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.componentInstance;
    expect( app ).toBeTruthy();
  } );

  it( 'should render title', () => {
    const fixture = TestBed.createComponent( AppComponent );
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled.querySelector( '.display-4' )?.textContent ).toContain( 'NASA Mars Rovers' );
  } );
} );
