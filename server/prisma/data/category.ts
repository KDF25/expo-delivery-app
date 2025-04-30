import { Prisma } from "@prisma/client";

export const CATEGORIES:  Prisma.CategoryCreateInput[] = [
    {
      name: 'Ice Cream',
      slug: 'ice-cream',
      image: 'https://res.cloudinary.com/djav6p4wl/image/upload/ice-cream-cup_1_du1pdm',
    },
    {
      name: 'Fries',
      slug: 'fries',
      image: 'https://res.cloudinary.com/djav6p4wl/image/upload/fries_xivrhp',
    },
    {
      name: 'Burger',
      slug: 'burger',
      image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_2_xbcyw2',
    },
    {
      name: 'Drink',
      slug: 'drink',
      image: 'https://res.cloudinary.com/djav6p4wl/image/upload/drink_2_wv3h3t',
    },
  ];
  