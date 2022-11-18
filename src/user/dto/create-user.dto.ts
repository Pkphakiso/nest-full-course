import { IsEmail, IsHash, IsString } from "class-validator";

export class CreateUserDto{
    // validate the name field
    @IsString()
    name: string;
    //validater the email field
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}