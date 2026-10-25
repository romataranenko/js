const users = [
  {
    id: 1,
    name: 'alecx',
    activti: false,
  },
  {
    id: 2,
    name: 'john',
    activti: true,
  }
];


const activeUsers = users.filter(user => user.activti === true);
console.log('Активные пользователи:', activeUsers);

const allNames = users.map(user => user.name);
console.log('Все имена:', allNames);

const usersWithId1 = users.filter(user => user.id === 1);
console.log('Пользователи с id 1:', usersWithId1);