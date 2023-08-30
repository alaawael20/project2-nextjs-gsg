import { salaryFormat } from '@/utils';

export const logo = '/logo.png';
export const targetDate = '2024-09-01T23:59:59';
export const images = {
  burgerIcon: '/Vector2.png',
  dropIcon: '/Vector.png',
  dropTop: '/Vector3.png',
  heroBanner: '/Banner.png',
  avatar: '/avatar.png',
  homeAndOutdoor: '/image-92.png',
  electronics: '/image-98.png',
  requestSuppliers: '/image-102.png',
  message: '/message2.png',
  usFlag: '/us-flag.png',
  googleStore: '/google-store.png',
  appleStore: '/apple-store.png',
  arrowRight: '/Vector4.png',
  goldenStar: '/fillstar.png',
  GrayStar: '/star.png',
  grid: '/grid1.png',
  flex: '/grid2.png',
  heart: 'likeCard.png',
  true: '/true.png',
  sold: '/sold.png',
  msg: '/msg1.png',
  world: '/worldwide.png',
  verify: '/verify.png',
  like: '/likee.png',
  arrowIcon: '/Vector5.png',
  payment: '/payment.png',
  visa: '/visa.png',
  express: '/express.png',
  american: '/amercan.png',
  lockIcon: '/lock.png',
  chatIcon: '/chat.png',
  deliveryIcon: '/delivery.png',
  ship: '/Vector6.png',
  google: '/facebook-icon.png',
  facebook: '/google-icon.png',
};
export const categoriesSelect = [
  {
    value: 'all',
    text: 'All category',
  },
  {
    value: 'electronic',
    text: 'electronic',
  },
  {
    value: 'home',
    text: 'home & outdoor',
  },
];

export const currency = [
  { value: 'usd', text: 'English, USD' },
  { value: 'ils', text: 'Arabic , ILS' },
];
export const shipSelect = [
  {
    value: 'germany',
    text: 'Ship to',
    image: '/flag.png',
  },
  {
    value: 'china',
    text: 'Ship to',
    image: '/flag3.png',
  },
  {
    value: 'franca',
    text: 'Ship to',
    image: '/flag5.png',
  },
];
export const headerIconsData = [
  {
    title: 'Profile',
    icon: '/profile.png',
  },
  {
    title: 'Message',
    icon: '/message.png',
  },
  {
    title: 'Orders',
    icon: '/order.png',
  },
  {
    title: 'cart',
    icon: '/cart.png',
  },
];

export const secondHeader = [
  'All category',
  'Hot offers',
  'Gift boxes',
  'Projects',
  'Menu item',
  'Help',
];

export const heroMenuItem = [
  { text: 'Automobiles', active: 'true' },
  { text: 'Clothes and wear', active: 'false' },
  { text: 'Home interiors', active: 'false' },
  { text: 'Computer and tech', active: 'false' },
  { text: 'Tools, equipments', active: 'false' },
  { text: 'Sports and outdoor', active: 'false' },
  { text: 'Animal and pets', active: 'false' },
  { text: 'Machinery tools', active: 'false' },
  { text: 'More category', active: 'false' },
];

export const dealsAndOffers = [
  {
    image: '/image-35.png',
    title: 'Smart watches',
    discount: '-25%',
  },
  {
    image: '/image-34.png',
    title: 'Laptops',
    discount: '-15%',
  },
  {
    image: '/image-28.png',
    title: 'GoPro cameras',
    discount: '-40%',
  },
  {
    image: '/image-29.png',
    title: 'Headphones',
    discount: '-25%',
  },
  {
    image: '/image-23.png',
    title: 'Canon cameras',
    discount: '-25%',
  },
];

export const homeAndOutdoor = [
  {
    title: 'Sofa chair',
    image: '/rasm.png',
    price: 19,
  },
  {
    title: 'Sofa chair',
    image: '/chair1.png',
    price: 19,
  },
  {
    title: 'Kitchen dishes',
    image: '/chair2.png',
    price: 19,
  },
  {
    title: 'Smart watches',
    image: '/gra.png',
    price: 19,
  },
  {
    title: 'Kitchen mixer',
    image: '/mixer.png',
    price: 19,
  },
  {
    title: 'Blenders',
    image: '/blinder.png',
    price: 19,
  },
  {
    title: 'Home appliance',
    image: '/appliance.png',
    price: 19,
  },
  {
    title: 'Coffee maker',
    image: '/tree.png',
    price: 19,
  },
];

export const electronicsAndGadgets = [
  {
    title: 'Smart watches',
    image: '/03.png',
    price: 19,
  },
  {
    title: 'Cameras',
    image: '/05.png',
    price: 19,
  },
  {
    title: 'Headphones',
    image: '/02.png',
    price: 19,
  },
  {
    title: 'Gaming set',
    image: '/01.png',
    price: 19,
  },
  {
    title: 'Laptops & PC',
    image: '/06.png',
    price: 19,
  },
  {
    title: 'Smartphones',
    image: '/04.png',
    price: 19,
  },
  {
    title: 'Electric kattle',
    image: '/07.png',
    price: 19,
  },
  {
    title: 'Smart watches',
    image: '/10.png',
    price: 19,
  },
];

export const recommendedItems = [
  {
    image: '/Bitmap22.png',
    price: salaryFormat('$', 10.3),
    text: 'T-shirts with multiple colors, for men',
  },
  {
    image: '/sweetir.png',
    price: salaryFormat('$', 12),
    text: 'Jeans shorts for men blue color',
  },
  {
    image: '/jacket.png',
    price: salaryFormat('$', 20),
    text: 'Brown winter coat medium size',
  },
  {
    image: '/jzdan.png',
    price: salaryFormat('$', 50),
    text: 'Jeans bag for travel for men',
  },
  {
    image: '/bag.png',
    price: salaryFormat('$', 100),
    text: 'Leather wallet',
  },
  {
    image: '/jeansshort.png',
    price: salaryFormat('$', 220),
    text: 'Canon camera  black, 100x zoom',
  },
  {
    image: '/imgstore5.png',
    price: salaryFormat('$', 300),
    text: 'Headset for gaming with mic',
  },
  {
    image: 'bag.png',
    price: salaryFormat('$', 400),
    text: 'Smartwatch silver color modern',
  },
  {
    image: '/gra.png',
    price: salaryFormat('$', 500),
    text: 'Blue wallet for men leather metarfial',
  },
  {
    image: '01.png',
    price: salaryFormat('$', 300),
    text: 'Jeans bag for travel for men',
  },
];

export const extraServicesData = [
  {
    image: '/image-108.png',
    icon: '/Vector22.png',
    text: 'Source from  Industry Hubs',
  },
  {
    image: '/product.png',
    icon: '/inventory_2.png',
    text: 'Customize Your Products',
  },
  {
    image: '/fly.png',
    icon: '/send.svg',
    text: 'Fast, reliable shipping by ocean or air',
  },
  {
    image: '/product2.png',
    icon: '/security.svg',
    text: 'Product monitoring and inspection',
  },
];
export const regions = [
  {
    image: '/flag2.png',
    name: 'Arabic Emirates',
    website: 'shop-name.ae',
  },
  {
    image: '/flag3.png',
    name: 'Australia',
    website: 'shopname.ae',
  },
  {
    image: '/us-flag.png',
    name: 'United States',
    website: 'shopname.ae',
  },
  {
    image: '/flag8.png',
    name: 'Russia',
    website: 'shopname.ru',
  },
  {
    image: '/flag8.png',
    name: 'Italy',
    website: 'shopname.ae',
  },
  {
    image: '/flag5.png',
    name: 'Denmark',
    website: 'shopname.ae',
  },
  {
    image: '/flag6.png',
    name: 'France',
    website: 'shopname.ae',
  },
  {
    image: '/flag1.png',
    name: 'Germany',
    website: 'shopname.ae',
  },
  {
    image: '/flag4.png',
    name: 'China',
    website: 'shopname.ae',
  },
  {
    image: '/flag7.png',
    name: 'Great Britain',
    website: 'shopname.ae',
  },
];

export const footer_socialMedia = [
  '/linkedin.png',
  '/facebook.png',
  '/twitter.png',
  '/instegram.png',
  '/youtube.png',
];

export const categoryFilter = [
  'Mobile accessory',
  'Electronics',
  'Smartphones',
  'Modern tech',
];

export const brandsFilter = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
export const featuresFilter = [
  'Metallic',
  'Plastic cover',
  '8GB Ram',
  'Super power',
  'Large Memory',
];

export const conditionFilter = ['Any', 'Refurbished', 'Brand new', 'Old items'];

const storeImage1 = '/imgstore1.png';
const storeImage2 = '/imgstore2.png';
const storeImage3 = '/imgstore3.png';
const storeImage4 = '/image-35.png';
const storeImage5 = '/image-34.png';
const storeImage6 = '/imgcard7.png';
const storeImage7 = '/image-22.png';
const storeImage8 = '/related3.png';
const storeImage9 = '/imgstore5.png';
const storeImage10 = '/clothing.png';

export const Products = [
  {
    id: 0,
    image: storeImage1,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black1',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 1,
    image: storeImage2,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black2',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 2,
    image: storeImage3,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black3',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 3,
    image: storeImage4,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black4',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 4,
    image: storeImage5,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black5',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 5,
    image: storeImage6,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black6',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 6,
    image: storeImage7,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black7',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 7,
    image: storeImage8,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black8',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 8,
    image: storeImage9,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black9',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 9,
    image: storeImage10,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black10',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 10,
    image: storeImage1,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black11',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 11,
    image: storeImage2,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black12',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 12,
    image: storeImage3,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black13',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 13,
    image: storeImage4,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black14',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 14,
    image: storeImage5,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 15,
    image: storeImage6,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black11',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 16,
    image: storeImage7,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black12',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 17,
    image: storeImage8,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black13',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 18,
    image: storeImage9,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black14',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 19,
    image: storeImage10,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 20,
    image: storeImage1,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 21,
    image: storeImage2,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K Action Camera - Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];
export const secondaryImages = [
  { id: 1, image: '/clothing.png' },
  { id: 2, image: '/clothing1.png' },
  { id: 3, image: '/clothing2.png' },
  { id: 4, image: '/clothing3.png' },
  { id: 5, image: '/clothing4.png' },
  { id: 6, image: '/clothing5.png' },
  { id: 7, image: '/clothing6.png' },
];

export const relatedProduct = [
  {
    id: 1,
    image: storeImage1,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 2,
    image: storeImage2,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 3,
    image: storeImage3,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 4,
    image: storeImage4,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 5,
    image: storeImage5,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

export const relatedProducts = [
  {
    id: 16,
    image: storeImage7,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 17,
    image: storeImage8,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: ' 4K  Camera ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 18,
    image: storeImage9,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 19,
    image: storeImage10,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 20,
    image: storeImage1,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro  Camera ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 21,
    image: storeImage2,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6 4K ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

export const cartImage = '/Bitmap.png';
export const cartImage1 = '/image-26.png';
export const cartImage2 = '/rasm.png';
export const cardImage3 = '/image-35.png';
export const cardImage4 = '/image-34.png';
export const cardImage5 = '/05.png';
export const cardImage6 = '/06.png';

export const cartData = [
  {
    id: 756735,
    image: cartImage,
    details: 'T-shirts with multiple colors, for men and lady',
    description:
      'Size: medium, Color: blue,  Material: PlasticSeller: Artel Market',
    currentPrice: '78.99',
  },
  {
    id: 15345,
    image: cartImage1,
    details: 'T-shirts with multiple colors, for men and lady',
    description:
      'Size: medium, Color: blue,  Material: PlasticSeller: Artel Market',
    currentPrice: '78.99',
  },
  {
    id: 65462,
    image: cartImage2,
    details: 'T-shirts with multiple colors, for men and lady',
    description:
      'Size: medium, Color: blue,  Material: PlasticSeller: Artel Market',
    currentPrice: '78.99',
  },
];

export const SaveLaterProducts = [
  {
    id: 16,
    image: storeImage7,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 17,
    image: storeImage8,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: ' 4K  Camera ',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 18,
    image: storeImage9,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro HERO6',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 19,
    image: storeImage10,
    currentPrice: '99.50',
    pastPrice: '1128.00',
    rating: '7.5',
    details: 'GoPro Black15',
    orders: '154',
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];
