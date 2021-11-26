import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {
    path: 'popular',
    component: PopularComponent
  }
];
@NgModule({
  declarations: [PopularComponent],
  imports: [ RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class MainModule {}
