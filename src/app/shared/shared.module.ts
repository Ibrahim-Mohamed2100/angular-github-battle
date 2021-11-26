import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { BattleCardComponent } from './battle-card/battle-card.component';

@NgModule({
  declarations: [PopularCardComponent, BattleCardComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [PopularCardComponent, BattleCardComponent]
})
export class SharedModule {}
