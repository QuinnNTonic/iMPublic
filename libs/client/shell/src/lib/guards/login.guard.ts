import { Injectable } from '@angular/core';

import { UserFacade } from '@involvemint/client/shared/data-access';
import { RouteService } from '@involvemint/client/shared/routes';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ImAppGuard } from './im-app.guard';

@Injectable()
export class LoginGuard  {
  constructor(
    private readonly uf: UserFacade,
    private readonly imGuard: ImAppGuard,
    private readonly route: RouteService
  ) {}

  canLoad(): Observable<boolean> {
    return this.activate();
  }

  canActivate(): Observable<boolean> {
    return this.activate();
  }

  private activate(): Observable<boolean> {
    return this.imGuard.canActivate().pipe(
      switchMap(() => this.uf.session.selectors.state$),
      take(1),
      map((state) => {
        if (state.id) {
          this.route.to.ROOT();
          return false;
        }
        return true;
      })
    );
  }
}
