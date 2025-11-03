import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private platformId = inject(PLATFORM_ID);

  /** True if running in browser (not SSR) */
  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /** True if running on server (SSR) */
  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
  
}
