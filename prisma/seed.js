const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      customerId: 1,
      phone: "123456",
      email: "arisa@hahaha.com",
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Before Sunrise",
      runtimeMins: 95,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: "2022-06-07T19:20:30.451Z",
      movieId: 1,
      screenId: 1,
    },
  });

  const createdTicket = await prisma.ticket.create({
    data: {
      customerId: 1,
      screeningId: 1,
    },
  });
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
