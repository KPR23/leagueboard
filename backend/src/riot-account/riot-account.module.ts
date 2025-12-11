import { Module } from '@nestjs/common';
import { RiotAccountController } from './riot-account.controller';
import { RiotAccountService } from './riot-account.service';

@Module({
  controllers: [RiotAccountController],
  providers: [RiotAccountService],
})
export class RiotAccountModule {}
