import { Routes } from '@angular/router';

import { Template } from '../public/template/template';

import {  Index  } from '../public/pages/index/index';
import {  About  } from '../public/pages/about/about';
import {  Contact } from '../public/pages/contact/contact';

export const PUBLIC_ROUTES: Routes = [

  {
    path: '',
    component: Template,
    children: [
      { path: '', redirectTo: 'public', pathMatch: 'full' },

      { path: 'public', component: Index  },
      { path: 'about', component: About  },
      { path: 'contact', component: Contact },

    ],
  },


];
