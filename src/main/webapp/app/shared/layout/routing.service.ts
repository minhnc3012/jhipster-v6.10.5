import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

/*
 *
 */
export interface Path {
  // tslint:disable-next-line:ban-types
  data: Object;
  // tslint:disable-next-line:ban-types
  params: Object;
  url: string;
}

/*
 *
 */
export type Paths = Array<Path>


/*
 *
 */
@Injectable()
export class RoutingService {
  private paths: Paths = [];

  public onChange = new BehaviorSubject(this.paths);

  public events= new BehaviorSubject(new NavigationEnd(0, '', ''));

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
   * [createUrl description]
   * @method createUrl
   * @param route [description]
   * @return [description]
   */
  private static createUrl(route: ActivatedRouteSnapshot): string {
    const url = route.url.map(urlSegment => urlSegment.toString()).join('/');
    return url;
  }

  /**
   * [isChildrenSelfRoute description]
   * @method isChildrenSelfRoute
   * @param route [description]
   * @return [description]
   */
  private static isChildrenSelfRoute(route: ActivatedRouteSnapshot): boolean {
    let v = false;
    route?.routeConfig?.children?.forEach(child => {
      if (child.path === '' && (child.component || child.loadChildren)) {
        v = true;
      }
    });

    return v;
  }

  /**
   * [createBreadcrumb description]
   * @method createBreadcrumb
   * @param route [description]
   * @param url   [description]
   * @return [description]
   */
  private static createBreadcrumb(route: ActivatedRouteSnapshot, url: string): Path {
    let isUrl = true;

    if (route.children.length !== 0 && route?.firstChild?.routeConfig?.path) {
      if (url !== '/' && !route?.routeConfig?.loadChildren && !route?.routeConfig?.component && !RoutingService.isChildrenSelfRoute(route)) {
        isUrl = false;
      }
    }

    return {
      data: route.data,
      params : route.params,
      url: isUrl ? url : ''
    };
  }


  /**
   * [init description]
   * @method init
   */
  private init(): void {  
    this.router.events.subscribe(routeEvent => {
      // https://github.com/angular/angular/issues/17473: event not fired anymore on load for routed component.
      if (routeEvent instanceof NavigationEnd) {
        this.events.next(routeEvent);
        // tslint:disable-next-line:one-variable-per-declaration
        let route = this.router.routerState.root.snapshot,
          tmpUrl = '',
          url = '',
          rootRoot = true;

        
        
        while (route.children.length) {
          route = route.firstChild!;
          tmpUrl = `/${RoutingService.createUrl(route)}`;

          if (route.outlet !== PRIMARY_OUTLET || (!route?.routeConfig?.path && !rootRoot)) {
            continue;
          }

          rootRoot = false;

          if (route.params || route.data) {
            for (const key in route.params) {
              if (!key) { continue; }
              if (route.data.title) {
                route.data.title = route.data.title.replace(`:${key}`, route.params[key]);
                route.data.title = route.data.title.replace(`:${key}`, route.params[key]);
              }
              if (route.data.breadcrumbs) {
                route.data.breadcrumbs = route.data.breadcrumbs.replace(`:${key}`, route.params[key]);
              }
              if (route.data.description) {
                route.data.description = route.data.description.replace(`:${key}`, route.params[key]);
              }
            }
          }

          if (tmpUrl === '/') {
            this.paths.push(RoutingService.createBreadcrumb(route, tmpUrl));
          } else {
            url += tmpUrl;
            this.paths.push(RoutingService.createBreadcrumb(route, url));
          }
        }

        this.onChange.next(this.paths);
      }
    });
  }
}
