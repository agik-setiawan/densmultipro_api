import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { PrismaModule } from './prisma/prisma.module';
import { HelperModule } from './helper/helper.module';

@Module({
  imports: [ModulesModule, PrismaModule, HelperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
