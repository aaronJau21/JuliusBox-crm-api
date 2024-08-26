import { PrismaClient } from '@prisma/client';

export async function seedPackagePack(prisma: PrismaClient) {
  const packagePacks = [
    {
      name: 'n/a',
      monto: 0.0,
    },
    {
      name: 'Package 1',
      monto: 33.96,
    },
    {
      name: 'Package 2',
      monto: 99.99,
    },
  ];

  for (const packagePack of packagePacks) {
    await prisma.package_Packs.create({
      data: packagePack,
    });
  }

  console.log('Se creo correctamente los Paquetes');
}
