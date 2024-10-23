import { Transform } from "class-transformer";
import { IsEmail, IsInt, IsOptional, isString, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @Transform(({value}) => value.trim())
    username: string;

    @IsString()
    @Transform(({value}) => value.trim())
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @Transform(({value}) => value.trim())
    name: string;

    @IsString()
    @MinLength(4)
    @Transform(({value}) => value.trim())
    lastname: string;

    @IsInt()
    role_id: number;

    @IsString()
    @MinLength(6)
    @Transform(({value}) => value.trim())
    password: string;

    @IsOptional()
    avatar: string;
}
