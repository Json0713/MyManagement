import { Component } from '@angular/core';
import { AsyncPipe  } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarStateService } from '../../../services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  imports: [ CommonModule, RouterModule, AsyncPipe ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {
  constructor(public sidebarService: SidebarStateService) {}
}
