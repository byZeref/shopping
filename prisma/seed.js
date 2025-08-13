import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function seed() {
  const product = await prisma.product.createMany({
    data:  [
      {
        name: 'Creatina',
        description: 'Creatina monohidratada, aumenta tus reservas de energia y mejora la recuperacion muscular',
        price: 18.50,
      },
      {
        name: 'Whey Protein',
        description: 'Proteina, mas proteina mas ganancia muscular ;)',
        price: 25.00,
      }
    ]
  })
}


try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error('error in prisma seed', e);
  await prisma.$disconnect();
  process.exit(1);
}