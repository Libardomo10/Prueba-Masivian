import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { WoodpeckerComponent } from './components/woodpecker/woodpecker.component';

const routes: Routes = [
  { path: "Comics", component: BreakingNewsComponent },
  { path: "Woodpecker", component: WoodpeckerComponent },
  { path: '', redirectTo: '/Comics', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
