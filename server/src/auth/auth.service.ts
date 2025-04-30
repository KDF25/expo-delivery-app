import { faker } from "@faker-js/faker"
import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { User } from "@prisma/client"
import { hash, verify } from "argon2"
import { PrismaService } from "src/prisma.service"
import { AuthDto } from "./dto/auth.dto"

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
	) {}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)

		if (!result) {
			throw new UnauthorizedException("Invalid refresh token")
		}

		const user = await this.prisma.user.findUnique({
			where: {
				id: result.id,
			},
		})

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async register(dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (oldUser) {
			throw new BadRequestException("User with this email already exists")
		}

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				name: "User",
				avatarPath:
					"https://res.cloudinary.com/djav6p4wl/image/upload/avatar_bc1iah",
				phone: "",
				password: await hash(dto.password),
			},
		})

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	private async issueTokens(userId: string) {
		const data = { id: userId }
		const accessToken = await this.jwt.signAsync(data, {
			expiresIn: "15m",
			secret: process.env.JWT_SECRET,
		})
		const refreshToken = await this.jwt.signAsync(data, {
			expiresIn: "7d",
			secret: process.env.JWT_SECRET,
		})

		return {
			accessToken,
			refreshToken,
		}
	}

	private returnUserFields(user: User) {
		return {
			id: user.id,
			email: user.email,
		}
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (!user) {
			throw new NotFoundException("User not found")
		}

		const isValidPassword = await verify(user.password, dto.password)

		if (!isValidPassword) {
			throw new UnauthorizedException("Invalid credentials")
		}

		return user
	}
}
