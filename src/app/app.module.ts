import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { CardComponent } from './card/card.component';
import { HorizontalCardComponent } from './card/horizontal-card/horizontal-card.component';
import { ShoppingLayoutComponent } from './shopping-layout/shopping-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { TopNavBar2Component } from './navigation/top-nav-bar2/top-nav-bar2.component';
import { RtLayoutComponent } from './rt-layout/rt-layout.component';
import { TopNavBar3Component } from './navigation/top-nav-bar3/top-nav-bar3.component';
import { SeqMemLayoutComponent } from './seq-mem-layout/seq-mem-layout.component';
import { AimTrainLayoutComponent } from './aim-train-layout/aim-train-layout.component';
import { RtHeroComponent } from './hero/rt-hero/rt-hero.component';
import { GameCardComponent } from './card/game-card/game-card.component';
import { SeqMemHeroComponent } from './hero/seq-mem-hero/seq-mem-hero.component';
import { WeirdGameCardComponent } from './card/game-card/weird-game-card/weird-game-card.component';
import { AimTrainHeroComponent } from './hero/aim-train-hero/aim-train-hero.component';
import { NumMemLayoutComponent } from './num-mem-layout/num-mem-layout.component';
import { NumMemHeroComponent } from './hero/num-mem-hero/num-mem-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info-component/user-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HeroComponent,
    CardComponent,
    HorizontalCardComponent,
    ShoppingLayoutComponent,
    HomeLayoutComponent,
    DashboardLayoutComponent,
    TopNavBar2Component,
    RtLayoutComponent,
    TopNavBar3Component,
    SeqMemLayoutComponent,
    AimTrainLayoutComponent,
    RtHeroComponent,
    GameCardComponent,
    SeqMemHeroComponent,
    WeirdGameCardComponent,
    AimTrainHeroComponent,
    NumMemLayoutComponent,
    NumMemHeroComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
