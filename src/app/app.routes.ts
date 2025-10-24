import { Routes } from '@angular/router';

import { Template } from './public/template/template';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
        import('./public/public.routes').then((m) => m.PUBLIC_ROUTES),
    },




    
    { path: '**', redirectTo: 'public', pathMatch: 'full' },

];
