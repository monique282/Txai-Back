import prisma from '../src/dataBase';

async function main() {
  await prisma.txaiUsers.createMany({
    data: [
      {
        email: 'm5@gmail.com',
        cpf: '55555555555',
        password:
          '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
        name: 'adiministrador',
        administrator: true,
        nameUser: 'Monique',
      },
      {
        email: 'm0@gmail.com',
        cpf: '55555555550',
        password:
          '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
        name: 'adiministrador',
        administrator: false,
        nameUser: 'Monique',
      },
      {
        email: 'm1@gmail.com',
        cpf: '55555555551',
        password:
          '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
        name: 'adiministrador',
        administrator: false,
        nameUser: 'Monique',
      },
    ],
  });
  for (let i = 1; i <= 33; i++) {
    const value = Math.floor(Math.random() * 50) + 10;
    const amount = Math.floor(Math.random() * 10) + 1;

    await prisma.items.create({
      data: {
        name: `Livro ${i}`,
        value: value,
        amount: amount,
        userId: 1,
      },
    });
  }
  for (let i = 1; i <= 37; i++) {
    const value = Math.floor(Math.random() * 50) + 10;
    const amount = Math.floor(Math.random() * 10) + 1;
    await prisma.items.create({
      data: {
        name: `Livro ${i}`,
        value: value,
        amount: amount,
        userId: 2,
      },
    });
  }
  for (let i = 1; i <= 30; i++) {
    const value = Math.floor(Math.random() * 50) + 10;
    const amount = Math.floor(Math.random() * 10) + 1;

    await prisma.items.create({
      data: {
        name: `Livro ${i}`,
        value: value,
        amount: amount,
        userId: 3,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
