import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async comparePassword(password: string, passwordHash: string) {
    const compare = await bcrypt.compare(password, passwordHash);
    return compare;
  }
}
