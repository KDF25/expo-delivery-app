import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { CategoryModule } from "./category/category.module"
import { ProductModule } from "./product/product.module"
import { UserModule } from "./user/user.module"
import { OrderModule } from "./order/order.module"
import { MailModule } from "./mail/mail.module"

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		CategoryModule,
		ProductModule,
		UserModule,
		OrderModule,
		MailModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
