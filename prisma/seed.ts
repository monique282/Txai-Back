import prisma from 'src/dataBase';

async function main() {
  await prisma.txaiUsers.deleteMany();
  await prisma.txaiUsers.createMany({
    data: [
      {
        email: 'm6@gmail.com',
        cpf: '55555555558',
        password:
          '$2b$12$RBPyrSMsrg30WlriZcmfheYQkZ/jC0xwx4S2zEv6MqbFuV1T9jDAu',
        name: 'adiministrador',
        administrator: true,
        nameUser: 'Monique',
      },
    ],
  });
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
