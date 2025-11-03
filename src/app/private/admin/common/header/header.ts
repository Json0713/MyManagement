import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarStateService } from '../../../services/sidebar-state.service';

@Component({
  selector: 'app-header',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  username = 'Admin';

  constructor(private sidebarService: SidebarStateService) {}

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  onLogout(): void {
    // your logout logic here
  }

}
