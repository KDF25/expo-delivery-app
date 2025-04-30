import { Injectable, NotFoundException } from "@nestjs/common"
import { Prisma, User } from "@prisma/client"
import { PrismaService } from "src/prisma.service"
import { returnProductObject } from "src/product/return-product.object"
import { returnUserObject } from "./return-user.object"
import { UserDto } from "./dto/user.dto"

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string, selectObject: Prisma.UserSelect = {}) {
		const user = await this.prisma.user.findUnique({
			where: {
				id,
			},
			select: {
				...returnUserObject,
				favorites: {
					select: returnProductObject,
				},
				...selectObject,
			},
		})

		if (!user) {
			throw new Error("User not found")
		}

		return user
	}

	async updateProfile(id: string, dto: UserDto) {
		return this.prisma.user.update({
			where: {
				id,
			},
			data: {
				...dto,
			},
		})
	}

	async toggleFavorite(userId: string, productId: string) {
		const user = await this.getById(userId)

		if (!user) throw new NotFoundException("User not found!")

		const isExists = user.favorites.some(
			(product) => product.id === productId,
		)

		await this.prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				favorites: {
					[isExists ? "disconnect" : "connect"]: {
						id: productId,
					},
				},
			},
		})

		return { message: "Success" }
	}
}
