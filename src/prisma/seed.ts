import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seed/usuario-seed';
import { seedClAccount } from './seed/ClAccount-seed';
import { seedPackagePack } from './seed/packagePacks-seed';
import { seedSbCategories } from './seed/sbCategories-seed';
import { seedTeamGuis } from './seed/teamGuis-seed';
import { seedClCategories } from './seed/clCategory-seed';

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedClAccount(prisma);
  await seedPackagePack(prisma);
  await seedSbCategories(prisma);
  await seedTeamGuis(prisma);
  await seedClCategories(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
