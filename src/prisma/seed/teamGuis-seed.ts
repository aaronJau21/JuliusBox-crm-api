import { PrismaClient } from '@prisma/client';

export async function seedTeamGuis(prisma: PrismaClient) {
  const teamGuis = [
    {
      name: 'n/a',
    },
    {
      name: 'Alvaro',
    },
    {
      name: 'Julio',
    },
  ];

  for (const teamGuy of teamGuis) {
    await prisma.team_guies.create({
      data: teamGuy,
    });
  }

  console.log('create Team Guy')
}
