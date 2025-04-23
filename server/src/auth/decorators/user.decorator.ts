import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { User } from "@prisma/client"

export const CurrentUser = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user // user is added by the JwtStrategy
		return data ? user?.[data] : user // if data is provided, return only that field, otherwise return the whole user object
	},
)
