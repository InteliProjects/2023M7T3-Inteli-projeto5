import { IsNotEmpty, IsString } from 'class-validator';
export class DTOnlubody {
  @IsNotEmpty()
  @IsString()
  text: string;
}
