import { PrismaClient } from '@prisma/client';

export async function seedSbCategories(prisma: PrismaClient) {
  const sb_categories = [
    {
      name: 'n/a',
    },
    {
      name: 'Jardinero',
    },
  ];

  for (const sb_category of sb_categories) {
    await prisma.sb_categories.create({
      data: sb_category,
    });
  }

  console.log('Se creo sbCategory')
}
