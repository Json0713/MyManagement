import { Routes } from '@angular/router';

import { Template } from '../public/template/template';
import {  Index  } from '../public/pages/index/index';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: Template,
    children: [
      { path: '', component: Index  },
    //{ path: 'about', component:  },
    //{ path: 'contact', component:  },
    ],
  },
];
