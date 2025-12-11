import { Controller, Get } from '@nestjs/common';
// biome-ignore lint/style/useImportType: NestJS DI requires value import
import { RiotAccountService } from './riot-account.service';

@Controller('riot-account')
export class RiotAccountController {
  constructor(private readonly riotAccountService: RiotAccountService) {}

  @Get()
  findAll() {
    return this.riotAccountService.getAllAccounts();
  }
}
