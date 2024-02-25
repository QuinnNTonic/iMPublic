import { ServerCoreApplicationServicesModule } from '@involvemint/server/core/application-services';
import { Module } from '@nestjs/common';
import { OrchaModule } from '@orcha/nestjs';
import { ChangeMakerOrchestration } from './change-maker/change-maker.orchestration';
import { ChatOrchestration } from './chat/chat.orchestration';
import { CreditOrchestration } from './credit/credit.orchestration';
import { EnrollmentController } from './api/enrollment/enrollment.controller';
import { EpApplicationGateway } from './ep-application/ep-application.gateway';
import { EpApplicationOrchestration } from './ep-application/ep-application.orchestration';
import { ExchangeAdminOrchestration } from './exchange-admin/exchange-admin.orchestration';
import { ExchangePartnerOrchestration } from './exchange-partner/exchange-partner.orchestration';
import { HandleOrchestration } from './handle/handle.orchestration';
import { OfferOrchestration } from './offer/offer.orchestration';
import { PassportDocumentOrchestration } from './passport-document/passport-document.orchestration';
import { PoiOrchestration } from './poi/poi.orchestration';
import { ProjectOrchestration } from './project/project.orchestration';
import { RequestOrchestration } from './request/request.orchestration';
import { ServeAdminOrchestration } from './serve-admin/serve-admin.orchestration';
import { ServePartnerOrchestration } from './serve-partner/serve-partner.orchestration';
import { SpApplicationGateway } from './sp-application/sp-application.gateway';
import { SpApplicationOrchestration } from './sp-application/sp-application.orchestration';
import { StorageOrchestration } from './storage/storage.orchestration';
import { TransactionOrchestration } from './transaction/transaction.orchestration';
import { UserOrchestration } from './user/user.orchestration';
import { VoucherOrchestration } from './voucher/voucher.orchestration';

@Module({
  imports: [
    ServerCoreApplicationServicesModule,
    EnrollmentController,
    OrchaModule.forFeature({
      orchestrations: [
        ChangeMakerOrchestration,
        ChatOrchestration,
        CreditOrchestration,
        ExchangeAdminOrchestration,
        EpApplicationOrchestration,
        ExchangePartnerOrchestration,
        HandleOrchestration,
        OfferOrchestration,
        PassportDocumentOrchestration,
        PoiOrchestration,
        ProjectOrchestration,
        RequestOrchestration,
        ServeAdminOrchestration,
        ServePartnerOrchestration,
        SpApplicationOrchestration,
        StorageOrchestration,
        TransactionOrchestration,
        UserOrchestration,
        VoucherOrchestration,
      ],
      gateways: [EpApplicationGateway, SpApplicationGateway],
    }),
  ],
})
export class ServerOrchaModule {}
