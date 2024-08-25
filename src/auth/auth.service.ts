import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { ResultCreateUser, ResultLogin } from './interfaces';
import { HashService } from '../global/hash.service';
import { LoginDto } from './dto/login.dto';
import { JwtGlobalService } from '../global/jwt-global.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private hashService: HashService,
    private jwtGlobalService: JwtGlobalService,
  ) {}

  async createUser(createAuthDto: CreateAuthDto): Promise<ResultCreateUser> {
    if (await this.findUser(createAuthDto.user_name))
      throw new BadRequestException('El usuario ya existe');

    const { password, ...user } = createAuthDto;

    const hash = await this.hashService.hashPassword(password);

    await this.prisma.user.create({
      data: {
        ...user,
        password: hash,
      },
    });

    return {
      msg: 'Se creo Correctamente',
    };
  }

  async login(loginDto: LoginDto): Promise<ResultLogin> {
    const user = await this.findUser(loginDto.user_name);
    if (!user) throw new NotFoundException('Password o usuario incorrecto');

    const pwd = await this.hashService.comparePassword(
      loginDto.password,
      user.password,
    );

    if (!pwd) throw new NotFoundException('Password o usuario incorrecto');
    const token = await this.jwtGlobalService.generateJwt({
      user_name: user.user_name,
      role: user.role,
    });

    return {
      msg: 'Bienvenido',
      token,
    };
  }

  private async findUser(user_name: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        user_name,
      },
    });

    return user;
  }
}
