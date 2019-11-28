import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'schedule', 
    loadChildren: './pages/schedule/schedule.module#SchedulePageModule' 
  },
  { 
    path: 'favorites',
    loadChildren: './pages/favorites/favorites.module#FavoritesPageModule' 
  },
  { 
    path: 'locations', 
    loadChildren: './pages/locations/locations.module#LocationsPageModule' 
  },
  { 
    path: 'warnings',
    loadChildren: './pages/warnings/warnings.module#WarningsPageModule' 
  },
  { 
    path: 'about', 
    loadChildren: './pages/about/about.module#AboutPageModule' 
  },
  { 
    path: 'creation', 
    loadChildren: './pages/creation/creation.module#CreationPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
