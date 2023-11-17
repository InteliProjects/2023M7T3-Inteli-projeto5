import {
  IsNotEmpty,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function FileSize(
  maxSize: number,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'FileSize',
      target: object.constructor,
      propertyName,
      constraints: [maxSize],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [maxSize] = args.constraints;
          return value && value.size <= maxSize;
        },
        defaultMessage(args: ValidationArguments) {
          const [maxSize] = args.constraints;
          return `O arquivo é muito grande. O tamanho máximo permitido é ${
            maxSize / 1024 / 1024
          }MB.`;
        },
      },
    });
  };
}

export function IsFlac(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'IsFlac',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          console.log(value.mimetype);
          return value && value.mimetype === 'audio/flac';
        },
        defaultMessage() {
          return 'O arquivo deve ser no formato FLAC.';
        },
      },
    });
  };
}

export class DTOControllerSpeechToText {
  @IsNotEmpty()
  @FileSize(1024 * 1024 * 50)
  @IsFlac()
  buffer: Express.Multer.File;
}
