import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Admin', 'Engineer', 'Developer'], {
    message: 'valid role is required.'
  })
  role: 'Admin' | 'Engineer' | 'Developer';
}
