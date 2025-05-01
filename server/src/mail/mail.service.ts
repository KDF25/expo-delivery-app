import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import * as nodemailer from "nodemailer"
import { OrderDto } from "src/order/dto/order.dto"
import { newOrderMail } from "src/utils/new-order-mail"

@Injectable()
export class MailService {
	private transporter

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		})
	}

	async sendNewOrder(
		to: string,
		products: Prisma.ProductCreateInput[],
		order: OrderDto,
	) {
		const mailOptions = {
			from: process.env.MAIL_NAME,
			to,
			subject: "New order",
			html: newOrderMail(products, order),
		}

		try {
			const info = await this.transporter.sendMail(mailOptions)
			console.log("Email sent: ", info.response)
		} catch (error) {
			console.error("Error sending email: ", error)
		}
	}
}
