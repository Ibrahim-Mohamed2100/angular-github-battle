import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { BattleCardComponent } from './battle-card/battle-card.component';
import { AppNavigatorComponent } from './app-navigator/app-navigator.component';
import { RouterModule } from '@angular/router';
import { BattleInputComponent } from './battle-input/battle-input.component';

@NgModule({
  declarations: [PopularCardComponent, BattleCardComponent, AppNavigatorComponent, BattleInputComponent],
  imports: [RouterModule],
  providers: [],
  exports: [PopularCardComponent, BattleCardComponent, AppNavigatorComponent, BattleInputComponent]
})
export class SharedModule {}
