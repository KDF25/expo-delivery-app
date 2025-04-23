import { IsEmail, IsString, MinLength } from "class-validator"

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: (args) =>
			!args.value
				? "Password is required and must be at least 6 characters"
				: `Password is too short. Minimum length is ${args.constraints[0]}, but got ${args.value.length}`,
	})
	@IsString()
	password: string
}
