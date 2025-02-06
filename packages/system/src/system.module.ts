import { Module } from '@nestjs/common';
import { SystemService } from './services/system.service';

@Module({
  providers: [SystemService],
  exports: [SystemService],
})
export class SystemModule {}
