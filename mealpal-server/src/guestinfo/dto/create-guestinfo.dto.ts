import {
    ArrayNotEmpty,
    IsAlphanumeric,
    IsArray,
    IsBoolean,
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MaxLength,
    IsNumber,
    IsDate
} from 'class-validator';

export class CreateGuestinfoDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    @IsString()
    restaurant_id: string;

    @IsOptional()
    create_time: any;

   
}
