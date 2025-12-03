import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from '../../admin/common/header/header';
import { Sidebar } from '../../admin/common/sidebar/sidebar';
import { Footer } from '../../admin/common/footer/footer';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'app-template',
  imports: [ 
    RouterOutlet,
    RouterModule,
    CommonModule,
    Header,
    Sidebar,
    Footer 
  ],
  templateUrl: './template.html',
  styleUrl: './template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Template {

  constructor(public sidebarService: SidebarStateService) {
    
  }

  onBackdropClick(): void {
    const svc = this.sidebarService as any;
    if (typeof svc.close === 'function') {
      svc.close()
      return;
    }
    if (typeof svc.toggle === 'function') {
      svc.toggle();
      return;
    }
  }

}
