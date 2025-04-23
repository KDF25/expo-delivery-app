import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common"
import { CategoryService } from "./category.service"

@Controller("categories")
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	async getAllCategories() {
		return this.categoryService.getAllCategories()
	}

	@Get("by-id/:id")
	async getCategoryById(@Param("id") id: string) {
		return this.categoryService.getCategoryById(id)
	}

	@Get("by-slug/:slug")
	async getCategoryBySlug(@Param("slug") slug: string) {
		return this.categoryService.getCategoryBySlug(slug)
	}

	@HttpCode(200)
	@Post()
	async create() {
		return this.categoryService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(":id")
	async update(@Param("id") id: string, @Body() dto: any) {
		return this.categoryService.update(id, dto)
	}

	@HttpCode(200)
	@Delete(":id")
	async delete(@Param("id") id: string) {
		return this.categoryService.delete(id)
	}
}
