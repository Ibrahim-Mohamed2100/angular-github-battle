import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: 'popular',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes, { useHash: false }), BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, SharedModule]
})
export class AppModule {}
