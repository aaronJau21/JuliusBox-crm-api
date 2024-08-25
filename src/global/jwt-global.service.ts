import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { IJwt } from './interface/jwt.interface';

@Injectable()
export class JwtGlobalService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwt(payload: IJwt) {
    return await this.jwtService.signAsync(payload);
  }
}
