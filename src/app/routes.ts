import {Routes} from '@angular/router';

export const MATERIAL_DOCS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule)
  },
  {path: 'categories', redirectTo: '/components/categories'},
  {path: 'cdk', pathMatch: 'full', redirectTo: '/cdk/categories'},
  {path: 'components', pathMatch: 'full', redirectTo: '/components/categories'},
  {
    path: 'guides',
    loadChildren: () => import('./pages/guide-list').then(m => m.GuideListModule)
  },
  // Since https://github.com/angular/components/pull/9574, the cdk-table guide became the overview
  // document for the cdk table. To avoid any dead / broken links, we redirect to the new location.
  {path: 'guide/cdk-table', redirectTo: '/cdk/table/overview'},
  // Needs to be defined before `:section` so it gets picked first when redirecting a missing page.
  {
    path: '404',
    loadChildren: () => import('./pages/not-found').then(m => m.NotFoundModule)
  },
  {path: 'wiki', redirectTo: 'https://github.com/efroemling/ballistica'},

  {path: '**', redirectTo: '/404'},
];
