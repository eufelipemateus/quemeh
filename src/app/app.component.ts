import { Component, OnInit, Inject, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { EventReplayer } from 'preboot';
import { WindowRefService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private appRef: ApplicationRef,
    private replayer: EventReplayer,
    private _win: WindowRefService
  ) {}

  ngOnInit() {
    this.router.initialNavigation();
    if (this._win.isBrowser()) {
      this.replayer.replayAll();
    }
  }
}
