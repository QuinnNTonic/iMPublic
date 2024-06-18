import { Injectable } from '@angular/core';


export interface ConfirmComponentDeactivation {
  canDeactivate: () => boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDeactivationGuard  {
  canDeactivate(component: ConfirmComponentDeactivation): boolean {
    return component.canDeactivate()
      ? true
      : confirm('You have unsaved changes. Are you sure you want to navigate away from this page?');
  }
}
