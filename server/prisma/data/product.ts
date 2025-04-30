import { Prisma } from "@prisma/client";

type ProductSeedData = Omit<Prisma.ProductCreateInput, 'category'> & {
    categorySlug: string;
  };

export const PRODUCTS: ProductSeedData[] = [
  {
    name: 'Classic Fries',
    slug: 'classic-fries',
    description: 'Crispy golden fries with a perfect crunch and salty flavor.',
    price: 3,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/fries_xivrhp',
    categorySlug: 'fries'
  },
  {
    name: 'Double Cheese Burger',
    slug: 'double-cheese-burger',
    description: 'Juicy burger with double cheese, lettuce and tomato.',
    price: 7,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_ybaqag',
    categorySlug: 'burger'
  },
  {
    name: 'Spicy BBQ Burger',
    slug: 'spicy-bbq-burger',
    description: 'Burger with spicy BBQ sauce and crispy onions.',
    price: 7,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_3_f2fuhl',
    categorySlug: 'burger'
  },
  {
    name: 'Classic Beef Burger',
    slug: 'classic-beef-burger',
    description: 'A timeless burger with fresh beef and simple toppings.',
    price: 6,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_1_mtcoyr',
    categorySlug: 'burger'
  },
  {
    name: 'Cheesy Delight Burger',
    slug: 'cheesy-delight-burger',
    description: 'Burger loaded with melty cheese and soft buns.',
    price: 6,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_2_xbcyw2',
    categorySlug: 'burger'
  },
  {
    name: 'Ultimate Stack Burger',
    slug: 'ultimate-stack-burger',
    description: 'Towering burger with layers of meat, cheese and sauce.',
    price: 8,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/burger_4_pf7gtv',
    categorySlug: 'burger'
  },
  {
    name: 'Citrus Sorbet',
    slug: 'citrus-sorbet',
    description: 'Refreshing sorbet with tangy citrus flavors.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/sorbet_sgcdlf',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Berry Sorbet',
    slug: 'berry-sorbet',
    description: 'Light sorbet made from fresh mixed berries.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/sorbet_1_amfofh',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Vanilla Ice Cream Cup',
    slug: 'vanilla-ice-cream-cup',
    description: 'Creamy vanilla ice cream served in a cup.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/ice-cream-cup_n4yidt',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Fruit Ice Pop',
    slug: 'fruit-ice-pop',
    description: 'Colorful frozen fruit popsicle for a cool treat.',
    price: 3,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/ice-pop_nfojah',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Chocolate Ice Cream Cup',
    slug: 'chocolate-ice-cream-cup',
    description: 'Rich chocolate ice cream in a chilled cup.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/ice-cream-cup_1_du1pdm',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Vanilla Cone',
    slug: 'vanilla-cone',
    description: 'Classic vanilla soft serve in a crispy cone.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/ice-cream-cone_y119ay',
    categorySlug: 'ice-cream'
  },
  {
    name: 'Berry Smoothie',
    slug: 'berry-smoothie',
    description: 'Sweet and tangy berry blend smoothie.',
    price: 5,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/drink_3_ptqzln',
    categorySlug: 'drink'
  },
  {
    name: 'Citrus Soda',
    slug: 'citrus-soda',
    description: 'Sparkling soda with refreshing citrus flavor.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/drink_1_wmeql3',
    categorySlug: 'drink'
  },
  {
    name: 'Lemonade Splash',
    slug: 'lemonade-splash',
    description: 'Fresh squeezed lemonade with a hint of mint.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/drink_nxsbas',
    categorySlug: 'drink'
  },
  {
    name: 'Mango Cooler',
    slug: 'mango-cooler',
    description: 'Chilled mango drink perfect for summer.',
    price: 4,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/drink_2_wv3h3t',
    categorySlug: 'drink'
  },
  {
    name: 'Curly Fries',
    slug: 'curly-fries',
    description: 'Seasoned curly fries for extra crunch and flavor.',
    price: 3,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/fries_3_pwdba3',
    categorySlug: 'fries'
  },
  {
    name: 'Waffle Fries',
    slug: 'waffle-fries',
    description: 'Fun waffle-cut fries with a crispy edge.',
    price: 3,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/fries_1_xsfd6u',
    categorySlug: 'fries'
  },
  {
    name: 'Shoestring Fries',
    slug: 'shoestring-fries',
    description: 'Thin, crispy fries with golden color and salty taste.',
    price: 3,
    image: 'https://res.cloudinary.com/djav6p4wl/image/upload/fries_2_ks8dzg',
    categorySlug: 'fries'
  }
]
