import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage, SearchPage } from './pages';

const routes: Routes = [
	{ path: '', component: HomePage },
  { path: 'search', component: SearchPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
