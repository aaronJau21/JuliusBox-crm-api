import { PrismaClient } from '@prisma/client';

export async function seedClAccount(prisma: PrismaClient) {
  const ClAccounts = [
    {
      nombre: 'n/a',
    },
    {
      nombre: 'julius@julius.com',
    },
    {
      nombre: 'alvaro@julius.com',
    },
  ];

  for (const clAccount of ClAccounts) {
    await prisma.clAccounts.create({
      data: clAccount,
    });
  }

  console.log('Create Cl Account')
}
