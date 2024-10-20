import {
  IsNumberString,
  IsString,
  IsEmail,
  Length,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsNumberString(
    { no_symbols: true },
    { message: 'O CPF deve conter apenas números.' },
  )
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos.' })
  cpf: string;

  @IsString()
  password: string;
}

export class CreateUserRegisterDto {
  @IsEmail({}, { message: 'Email deve ser um endereço de email válido' })
  @Length(1, 255, { message: 'O email deve ter entre 1 e 255 caracteres' })
  email: string;

  @IsNumberString(
    { no_symbols: true },
    { message: 'O CPF deve conter apenas números.' },
  )
  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos.' })
  cpf: string;

  @Length(1, 255, { message: 'A senha deve ter no mínimo 8 caracteres' })
  password: string;

  @Length(1, 50, { message: 'O nome deve ter entre 1 e 50 caracteres' })
  name: string;

  @Length(1, 50, {
    message: 'O nome de usuário deve ter entre 1 e 50 caracteres',
  })
  nameUser: string;

  @IsBoolean({ message: 'O campo administrador deve ser um valor booleano' })
  @IsOptional()
  administrator?: boolean;

  @IsOptional()
  photo?: string;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;
}
