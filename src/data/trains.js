export const trains = [
  {
    id: '1',
    number: '705К',
    route: { from: 'Київ', to: 'Перемишль' },
    departure: '2026-05-20 06:00',
    duration: '9г 11хв',
    wagons: [
      { id: 1, type: 'Купе', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [2, 5] },
      { id: 2, type: 'Люкс', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [1] }
    ]
  },
  {
    id: '2',
    number: '091К',
    route: { from: 'Київ', to: 'Львів' },
    departure: '2026-05-21 22:37',
    duration: '7г 15хв',
    wagons: [
      { id: 1, type: 'Купе', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [3, 4] },
       { id: 2, type: 'Люкс', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [1] }
    ]
  },
  {
    id: '3',
    number: '007K',
    route: { from: 'Львів', to: 'Чернівці'},
    departure: '2026-04-28 05:09',
    duration: '4г 32хв',
    wagons: [
        { id: 1, type:'Купе', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied:[] },
        { id: 2, type: 'Купе', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [] },
        { id: 3, type: 'Купе', seats: [1, 2, 3, 4, 5, 6, 7, 8], occupied: [] }
    ]
  }
];