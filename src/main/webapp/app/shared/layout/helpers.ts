import { Subscription } from 'rxjs';

/**
 * [removeSubscriptions description]
 * @method removeSubscriptions
 */
export function removeSubscriptions(subscriptions?:Array<Subscription>): Array<Subscription> {
  if (subscriptions && subscriptions != null) {
    subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
  return [];
}

/**
 * [removeListeners description]
 * @method removeListeners
 */
export function removeListeners(listeners?:Array<Function>): Array<Function> {
  if (listeners) {
    listeners.forEach((listener: Function) => {
      listener();
    });
  }
  return [];
}
