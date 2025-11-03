import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PlatformService } from '../../../services/platform.service';

@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './date-time.html',
  styleUrl: './date-time.scss',
})
export class DateTime implements OnInit, OnDestroy {

  now = new Date();
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(private platform: PlatformService) {}

  ngOnInit(): void {
    if (this.platform.isBrowser()) {
      this.intervalId = setInterval(() => {
        this.now = new Date();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
