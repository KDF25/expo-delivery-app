import { IsEmail, IsNumber, IsString } from "class-validator"

export class UserDto {
	@IsEmail()
	email: string

	@IsNumber()
	phone: string

	@IsString()
	name: string

	@IsString()
	avatarPath: string
}
