import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'popular',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/main.module').then(m => m.MainModule)
  }
];
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes, { useHash: false }), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
