import { IExchangeAdminOrchestration, InvolvemintRoutes } from '@involvemint/shared/domain';
import { ClientOperation, ClientOrchestration, IClientOrchestration } from '@orcha/angular';

@ClientOrchestration(InvolvemintRoutes.epAdmin)
export class ExchangeAdminOrchestration implements IClientOrchestration<IExchangeAdminOrchestration> {
  @ClientOperation()
  getForExchangePartner!: IClientOrchestration<IExchangeAdminOrchestration>['getForExchangePartner'];
  @ClientOperation()
  getSuperAdminForExchangePartner!: IClientOrchestration<IExchangeAdminOrchestration>['getSuperAdminForExchangePartner'];
  @ClientOperation()
  addAdmin!: IClientOrchestration<IExchangeAdminOrchestration>['addAdmin'];
  @ClientOperation()
  removeAdmin!: IClientOrchestration<IExchangeAdminOrchestration>['removeAdmin'];
}
