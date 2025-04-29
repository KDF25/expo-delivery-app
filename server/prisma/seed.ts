import { PrismaClient } from '@prisma/client';
import { CATEGORIES, PRODUCTS } from './data';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Starting seeding...');

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const categoryMap = new Map<string, string>(); // slug -> id

  for (const category of CATEGORIES) {
    const created = await prisma.category.create({
      data: category,
    });
    categoryMap.set(created.slug, created.id);
  }

  for (const product of PRODUCTS) {
    const categoryId = categoryMap.get(product.categorySlug);

    if (!categoryId) {
      console.warn(`❗ Категория не найдена для продукта: ${product.name}`);
      continue;
    }

    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        image: product.image,
        category: {
          connect: { id: categoryId },
        },
      },
    });
  }

  console.log('✅ Seeding completed.');
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error('❌ Seeding error:', e);
  process.exit(1);
});
