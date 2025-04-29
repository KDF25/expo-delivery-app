import { Prisma } from "@prisma/client";

export const CATEGORIES:  Prisma.CategoryCreateInput[] = [
    {
      name: 'Coffee',
      slug: 'coffee',
      image: 'https://via.placeholder.com/150?text=Coffee',
    },
    {
      name: 'Fries',
      slug: 'fries',
      image: 'https://via.placeholder.com/150?text=Fries',
    },
    {
      name: 'Burger',
      slug: 'burger',
      image: 'https://via.placeholder.com/150?text=Burger',
    },
    {
      name: 'Drink',
      slug: 'drink',
      image: 'https://via.placeholder.com/150?text=Drink',
    },
  ];
  