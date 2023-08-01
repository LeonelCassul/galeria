import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'animal'},
  {
    path: 'home',
    loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
