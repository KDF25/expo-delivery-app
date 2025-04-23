import { Injectable, NotFoundException } from "@nestjs/common"
import { PrismaService } from "src/prisma.service"
import { returnCategoryObject } from "./return-category.object"
import { get } from "http"
import { CategoryDto } from "./dto/category.dto"
import { generateSlug } from "src/utils/generate-slug"
import { NotFoundError } from "rxjs"

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getAllCategories() {
		return this.prisma.category.findMany({
			select: returnCategoryObject,
		})
	}

	async getCategoryById(id: string) {
		const category = await this.prisma.category.findUnique({
			where: { id },
			select: returnCategoryObject,
		})
		if (!category) {
			throw new Error("Category not found")
		}
		return category
	}

	async getCategoryBySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: { slug },
			select: returnCategoryObject,
		})
		if (!category) {
			throw new Error("Category not found")
		}
		return category
	}

	async create() {
		const category = await this.prisma.category.create({
			data: {
				name: "test",
				slug: "test",
				image: "test",
			},
		})
		return category
	}

	async update(id: string, dto: CategoryDto) {
		const category = await this.prisma.category.findUnique({
			where: { id },
		})

		// Если категория не найдена, выбрасываем исключение
		if (!category) {
			throw new NotFoundException("Category not found")
		}

		// Если категория найдена, обновляем её
		const updatedCategory = await this.prisma.category.update({
			where: { id },
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image,
			},
		})

		return updatedCategory
	}

	async delete(id: string) {
		const oldCategory = await this.prisma.category.findUnique({
			where: { id },
		})

		// Если категория не найдена, выбрасываем исключение
		if (!oldCategory) {
			throw new NotFoundException("Category not found")
		}
		const category = await this.prisma.category.delete({
			where: { id },
		})

		return category
	}
}
