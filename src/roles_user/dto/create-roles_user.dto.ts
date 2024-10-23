import { IsString } from "class-validator";

export class CreateRolesUserDto {
    @IsString()
    role: string;
}
