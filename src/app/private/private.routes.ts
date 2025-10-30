import { Routes } from '@angular/router';

import { Template } from './admin/template/template';
import { Index } from './admin/pages/index/index';
import { Calendar } from './admin/pages/calendar/calendar';
import { Task } from './admin/pages/task/task';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: Template,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Index },
      { path: 'calendar', component: Calendar },
      { path: 'task', component: Task },
    ],
  },
];
