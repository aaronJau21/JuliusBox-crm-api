import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [PrismaModule, AuthModule, GlobalModule],
})
export class AppModule {}
