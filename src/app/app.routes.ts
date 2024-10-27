import { Routes } from '@angular/router';
// import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
// import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModsModule } from './mods/mods.module';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'elements',
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
    { path: 'collections',
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
    { path: 'views',
    loadChildren: () => import ('./views/views.module').then(m => m.ViewsModule) },
    { path: 'mods',
    loadChildren: () => import ('./mods/mods.module').then(m => m.ModsModule)},
    { path: '**', component: NotFoundComponent},
];