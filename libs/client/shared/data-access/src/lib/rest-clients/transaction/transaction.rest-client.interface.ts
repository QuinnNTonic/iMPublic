import { InvolvemintRoutes, ITransactionOrchestration } from '@involvemint/shared/domain';
import { ClientOperation, ClientOrchestration, IClientOrchestration } from '@orcha/angular';

@ClientOrchestration(InvolvemintRoutes.transaction)
export class TransactionOrchestration implements IClientOrchestration<ITransactionOrchestration> {
  @ClientOperation()
  getForProfile!: IClientOrchestration<ITransactionOrchestration>['getForProfile'];
  @ClientOperation()
  transaction!: IClientOrchestration<ITransactionOrchestration>['transaction'];
}
