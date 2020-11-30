import { InjectionToken } from '@angular/core';
import { LayoutStore } from './layout.store';
import { LayoutConfig } from './layout.config';

/**
 * [InjectionToken description]
 */
export const AdminLTE3ConfigToken = new InjectionToken('layoutConfig');

/**
 * [layoutStoreFactory description]
 */
export function LayoutStoreFactory(layoutConfig: LayoutConfig): LayoutStore {
    return new LayoutStore(layoutConfig);
}

/**
 * [layoutProvider description]
 */
export function layoutProvider(layoutConfig: LayoutConfig):any {
    return [{
        provide: LayoutStore,
        useFactory: LayoutStoreFactory,
        deps: [AdminLTE3ConfigToken]
        }, {
            provide: AdminLTE3ConfigToken,
            useValue: layoutConfig
        }
    ];
}
