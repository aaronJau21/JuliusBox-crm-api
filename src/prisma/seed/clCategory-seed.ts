import { PrismaClient } from '@prisma/client';

export async function seedClCategories(prisma: PrismaClient) {
  const clCategories = [
    {
      name: 'n/a',
    },
    {
      name: 'Pintor',
    },
  ];

  for (const clCategory of clCategories) {
    await prisma.cl_Categories.create({
      data: clCategory,
    });
  }

  console.log('Se creo correctamente Cl Category');
}
