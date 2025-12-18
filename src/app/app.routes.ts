import { Routes } from '@angular/router';
import { HomePageComponet } from './pages/home-page/home-page';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponet }, 
     { path: '**', redirectTo: 'home' }

];
