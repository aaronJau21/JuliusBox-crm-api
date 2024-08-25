import { Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { JwtGlobalService } from './jwt-global.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [HashService, JwtGlobalService],
  exports: [HashService, JwtGlobalService],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
    global:true,
    secret: process.env.SECRET_KEY,
    signOptions:{expiresIn:'1d'}
  })]
})
export class GlobalModule {}
