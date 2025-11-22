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
  isQAOpen = false;
  settingsOpen = false;
  isSubTasksOpen = false;

  
  constructor(public sidebarService: SidebarStateService) {}

  toggleQA(): void {
    this.isQAOpen = !this.isQAOpen;
  }

  toggleSubTasks() {
    this.isSubTasksOpen = !this.isSubTasksOpen
  }

  toggleSettings(): void {
    this.settingsOpen = !this.settingsOpen;
  }

}
