import { faker } from '@faker-js/faker';

export type Products = {
  name: string;
  price: number;
  booked: number;
  in_stock: number;
  total: number;
  unit: 'kg' | 'ltr' | 'lgth';
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newProduct = (): Products => {
  return {
    name: faker.commerce.product(),
    price: parseInt(faker.commerce.price(100, 200), 10),
    booked: parseInt(faker.commerce.price(1, 20), 10),
    in_stock: parseInt(faker.commerce.price(20, 50), 10),
    total: parseInt(faker.commerce.price(70, 100), 10),
    unit: faker.helpers.shuffle<Products['unit']>(['kg', 'ltr', 'lgth'])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Products[] => {
    const len = lens[depth]!;
    return range(len).map((): Products => {
      return newProduct();
    });
  };

  return makeDataLevel();
}
