import { Component, OnDestroy, NgZone, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarStateService } from '../../../services/sidebar-state.service';

@Component({
  selector: 'app-header',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {

  username = 'Admin';

  readonly currentDateTime = signal<string>('');

  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(
    private sidebarService: SidebarStateService,
    private zone: NgZone
  ) {
    this.startClock();
  }

  private startClock(): void {
    this.zone.runOutsideAngular(() => {
      this.updateClock();
      this.intervalId = setInterval(() => {
        this.updateClock();
      }, 1000);
    });
  }

  private updateClock(): void {
    const now = new Date();

    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');

    let hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;

    const time = `${hour}:${minute}:${second} ${ampm}`;

    this.zone.run(() => {
      this.currentDateTime.set(`${weekday}, ${month} ${day} | ${time}`);
    });
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  onLogout(): void {

  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
