import { Module } from "@nestjs/common"
import { OrderService } from "./order.service"
import { OrderController } from "./order.controller"
import { PrismaService } from "src/prisma.service"
import { MailService } from "src/mail/mail.service"

@Module({
	controllers: [OrderController],
	providers: [OrderService, PrismaService, MailService],
})
export class OrderModule {}
