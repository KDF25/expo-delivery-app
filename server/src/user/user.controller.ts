import { Body, Controller, Get, HttpCode, Param, Patch } from "@nestjs/common"
import { Auth } from "src/auth/decorators/auth.decorator"
import { CurrentUser } from "src/auth/decorators/user.decorator"
import { UserService } from "./user.service"
import { UserDto } from "./dto/user.dto"

@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get("profile")
	@Auth()
	async getProfile(@CurrentUser("id") id: string) {
		return this.userService.getById(id)
	}

	@Patch("profile")
	@Auth()
	async updateProfile(@CurrentUser("id") id: string, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Patch("profile/favorites/:productId")
	async toggleFavorite(
		@CurrentUser("id") id: string,
		@Param("productId") productId: string,
	) {
		return this.userService.toggleFavorite(id, productId)
	}
}
