import { IsNumberString, IsString, Length } from 'class-validator';

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
