export interface BikeBrand {
  id: string;
  name: string;
  logo?: string;
  models: string[];
}

export const bikeBrands: BikeBrand[] = [
  {
    id: 'hero',
    name: 'Hero',
    models: ['Splendor Plus', 'HF Deluxe', 'Passion Pro', 'Glamour', 'Xtreme 160R', 'Xpulse 200'],
  },
  {
    id: 'honda',
    name: 'Honda',
    models: ['Activa 6G', 'Shine', 'Unicorn', 'SP 125', 'Hornet 2.0', 'CB350', 'Dio'],
  },
  {
    id: 'bajaj',
    name: 'Bajaj',
    models: ['Pulsar 150', 'Pulsar NS200', 'Pulsar RS200', 'Dominar 400', 'Platina', 'CT100'],
  },
  {
    id: 'tvs',
    name: 'TVS',
    models: ['Apache RTR 160', 'Apache RTR 200', 'Jupiter', 'Ntorq', 'Raider', 'Star City'],
  },
  {
    id: 'yamaha',
    name: 'Yamaha',
    models: ['FZ-S', 'MT-15', 'R15 V4', 'Fascino', 'Ray ZR', 'FZ-X'],
  },
  {
    id: 'royal-enfield',
    name: 'Royal Enfield',
    models: ['Classic 350', 'Bullet 350', 'Meteor 350', 'Hunter 350', 'Himalayan', 'Continental GT'],
  },
  {
    id: 'ktm',
    name: 'KTM',
    models: ['Duke 200', 'Duke 390', 'RC 200', 'RC 390', 'Adventure 390'],
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    models: ['Access 125', 'Gixxer 150', 'Gixxer SF', 'Burgman', 'Avenis'],
  },
  {
    id: 'vespa',
    name: 'Vespa',
    models: ['VXL 125', 'SXL 150', 'Elegante', 'ZX 125'],
  },
  {
    id: 'kawasaki',
    name: 'Kawasaki',
    models: ['Ninja 300', 'Ninja 650', 'Z650', 'Versys 650'],
  },
  {
    id: 'triumph',
    name: 'Triumph',
    models: ['Street Triple', 'Speed 400', 'Tiger Sport'],
  },
  {
    id: 'bmw',
    name: 'BMW',
    models: ['G310R', 'G310GS', 'S1000RR'],
  },
];

export const getBrandById = (id: string) => bikeBrands.find(b => b.id === id);
export const getModelsByBrand = (brandId: string) => getBrandById(brandId)?.models || [];
