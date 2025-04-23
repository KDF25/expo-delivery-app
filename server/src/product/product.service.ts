import { Injectable, NotFoundException } from "@nestjs/common"
import { CategoryService } from "src/category/category.service"
import { PrismaService } from "src/prisma.service"
import { generateSlug } from "src/utils/generate-slug"
import { ProductDto } from "./dto/product.dto"
import { returnProductObject } from "./return-product.object"

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private categoryService: CategoryService,
	) {}

	async getAllProducts(searchTerm?: string) {
		if (searchTerm) {
			return this.searchProducts(searchTerm)
		}
		return this.prisma.product.findMany({
			select: returnProductObject,
			orderBy: {
				createdAt: "desc",
			},
		})
	}

	async searchProducts(searchTerm: string) {
		return this.prisma.product.findMany({
			where: {
				OR: [
					{
						name: {
							contains: searchTerm,
							mode: "insensitive",
						},
					},
					{
						description: {
							contains: searchTerm,
							mode: "insensitive",
						},
					},
				],
			},
			select: returnProductObject,
			orderBy: {
				createdAt: "desc",
			},
		})
	}

	async getProductBySlug(slug: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				slug,
			},
			select: returnProductObject,
		})

		if (!product) {
			throw new NotFoundException("Product not found!")
		}
		return product
	}

	async getProductByCategorySlug(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug,
				},
			},
			select: returnProductObject,
		})
		if (!products) {
			throw new Error("Products not found")
		}
		return products
	}

	async create() {
		const product = await this.prisma.product.create({
			data: {
				name: "test",
				slug: "test",
				image: "test",
				description: "test",
				price: 0,
			},
		})
		return product
	}

	async update(id: string, dto: ProductDto) {
		const product = await this.prisma.product.findUnique({
			where: { id },
		})

		if (!product) {
			throw new NotFoundException("Product not found")
		}

		const category = await this.categoryService.getCategoryById(
			dto.categoryId,
		)

		if (!category) {
			throw new NotFoundException("Category not found")
		}

		const updatedProduct = await this.prisma.product.update({
			where: { id },
			data: {
				name: dto.name,
				description: dto.description,
				price: dto.price,
				slug: generateSlug(dto.name),
				category: {
					connect: {
						id: dto.categoryId,
					},
				},
			},
		})

		return updatedProduct
	}

	async delete(id: string) {
		const oldProduct = await this.prisma.product.findUnique({
			where: { id },
		})

		if (!oldProduct) {
			throw new NotFoundException("Product not found")
		}
		const product = await this.prisma.product.delete({
			where: { id },
		})

		return product
	}
}
