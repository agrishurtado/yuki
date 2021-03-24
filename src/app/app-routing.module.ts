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
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  {
  path: 'access-input',
  loadChildren: () => import('./access-input/access-input.module').then( m => m.AccessInputPageModule)
},
{
  path: 'access-out',
  loadChildren: () => import('./access-out/access-out.module').then( m => m.AccessOutPageModule)
},{
  path: 'access-create',
  loadChildren: () => import('./access-create/access-create.module').then( m => m.AccessCreatePageModule)
},
{
  path: 'access-performed',
  loadChildren: () => import('./access-performed/access-performed.module').then( m => m.AccessPerformedPageModule)
},
{
  path: 'access-create-out',
  loadChildren: () => import('./access-create-out/access-create-out.module').then( m => m.AccessCreateOutPageModule)
},
{
  path: 'access-performed-out',
  loadChildren: () => import('./access-performed-out/access-performed-out.module').then( m => m.AccessPerformedOutPageModule)
},
{
  path: 'access-menu',
  loadChildren: () => import('./access-menu/access-menu.module').then( m => m.AccessMenuPageModule)
},
{
  path: 'access-menu-out',
  loadChildren: () => import('./access-menu-out/access-menu-out.module').then( m => m.AccessMenuOutPageModule)
},
{
  path: 'defaulters',
  loadChildren: () => import('./defaulters/defaulters.module').then( m => m.DefaultersPageModule)
},
{
  path: 'common-areas',
  loadChildren: () => import('./common-areas/common-areas.module').then( m => m.CommonAreasPageModule)
},
  {
    path: 'security-attencion',
    loadChildren: () => import('./security-attencion/security-attencion.module').then( m => m.SecurityAttencionPageModule)
  },
  {
    path: 'incident-reports',
    loadChildren: () => import('./incident-reports/incident-reports.module').then( m => m.IncidentReportsPageModule)
  },
  {
    path: 'guards-releases',
    loadChildren: () => import('./guards-releases/guards-releases.module').then( m => m.GuardsReleasesPageModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./directory/directory.module').then( m => m.DirectoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
