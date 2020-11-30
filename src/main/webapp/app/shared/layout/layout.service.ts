import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ActivationStart, Event, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  
  public isCustomLayout = new BehaviorSubject(false);

  private customLayout?: boolean;


  /**
   * @method constructor
   * @param router [description]
   */
  constructor(
    private router: Router
  ) {
    this.init();
  }

  /**
   * [init description]
   * @method init
   * @return [description]
   */
  private init(): void {
    this.router.events.pipe(
      filter((e: Event): e is ActivationStart => e instanceof ActivationStart)
    ).subscribe((e: ActivationStart) => {
      this.customLayout = e.snapshot.data.customLayout;
      this.isCustomLayout.next(!!this.customLayout);
    });

    // this.router.events.subscribe((event: Event): event is RouterEvent => event instanceof ActivationStart {
    //   if (event instanceof ActivationStart) {
    //     this.customLayout = event.snapshot.data.customLayout;
    //     this.isCustomLayout.next(!!this.customLayout);
    //   }
    // });
  }
}
