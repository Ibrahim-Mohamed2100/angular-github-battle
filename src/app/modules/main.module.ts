import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { BattleComponent } from './battle/battle.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  }
];
@NgModule({
  declarations: [PopularComponent, BattleComponent],
  imports: [ RouterModule.forChild(routes), SharedModule],
  providers: [],
  exports: [RouterModule]
})
export class MainModule {}
