import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common"
import { ProductService } from "./product.service"
import { ProductDto } from "./dto/product.dto"
import { Auth } from "src/auth/decorators/auth.decorator"

@Controller("products")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAllProducts(@Query("searchTerm") searchTerm: string) {
		return await this.productService.getAllProducts(searchTerm)
	}

	@Get("by-slug/:slug")
	async getProductBySlug(@Param("slug") slug: string) {
		return await this.productService.getProductBySlug(slug)
	}

	@Get("by-category/:categorySlug")
	async getProductByCategorySlug(
		@Param("categorySlug") categorySlug: string,
	) {
		return await this.productService.getProductByCategorySlug(categorySlug)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async create() {
		return await this.productService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(":id")
	@Auth()
	async update(@Param("id") id: string, @Body() dto: ProductDto) {
		return await this.productService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(":id")
	@Auth()
	async delete(@Param("id") id: string) {
		return await this.productService.delete(id)
	}
}
