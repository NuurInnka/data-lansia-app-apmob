import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tambah-data',
    loadChildren: () => import('./tambah-data/tambah-data.module').then( m => m.TambahDataPageModule)
  },
  {
    path: 'edit-data',
    loadChildren: () => import('./edit-data/edit-data.module').then( m => m.EditDataPageModule)
  },
  {
    path: 'detail-data',
    loadChildren: () => import('./detail-data/detail-data.module').then( m => m.DetailDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
