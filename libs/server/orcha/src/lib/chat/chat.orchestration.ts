import { ChatService } from '@involvemint/server/core/application-services';
import {
  IChatOrchestration,
  InvolvemintRoutes,
  SendChatMessageDto,
} from '@involvemint/shared/domain';
import { IQuery } from '@orcha/common';
import { IServerOrchestration, ServerOperation, ServerOrchestration } from '@orcha/nestjs';

@ServerOrchestration(InvolvemintRoutes.chat)
export class ChatOrchestration implements IServerOrchestration<IChatOrchestration> {
  constructor(private readonly chat: ChatService) {}

  @ServerOperation()
  sendMessage(_: IQuery<void>, token: string, dto: SendChatMessageDto) {
    return this.chat.sendMessage(token, dto);
  }
}
