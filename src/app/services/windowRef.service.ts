import { Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  public window: (Window & typeof globalThis) | null;
  private _isBrowser;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: string
  ) {
     this.window = this.document.defaultView;
     this._isBrowser = isPlatformBrowser(platformId);
  }

  public isBrowser(): boolean {
    return this._isBrowser;
  }
}
