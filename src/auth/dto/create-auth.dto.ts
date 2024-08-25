import { RoleUser } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  user_name: string;

  @IsString()
  password: string;

  @IsEnum(RoleUser)
  @IsOptional()
  role: RoleUser;
}
