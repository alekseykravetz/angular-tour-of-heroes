import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MessageService } from '../message.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';

xdescribe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroServiceInstance: HeroService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, BrowserDynamicTestingModule, RouterModule, AppRoutingModule, HttpClientModule, AppModule,
      RouterModule.forRoot([])],
      declarations: [],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    heroServiceInstance = fixture.debugElement.injector.get(HeroService);
    spyOn(heroServiceInstance, 'getHero').and.returnValue({
      id: 1, name: 'mock hero'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a hero', () => {
    expect(component.hero).not.toBeNull();
  });

  it('should get corret hero details', () => {
    expect(component.hero).toEqual({
      id: 1, name: 'mock hero'
    });
  });

});
