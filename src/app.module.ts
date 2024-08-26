import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [PrismaModule, AuthModule, GlobalModule, ClientsModule],
})
export class AppModule {}
