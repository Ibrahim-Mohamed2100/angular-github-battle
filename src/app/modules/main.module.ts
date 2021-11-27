import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { BattleComponent } from './battle/battle.component';

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
  imports: [ RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class MainModule {}
