import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiotAccountModule } from './riot-account/riot-account.module';

@Module({
  imports: [RiotAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
