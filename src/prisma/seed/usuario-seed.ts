import { PrismaClient, RoleUser } from '@prisma/client';

interface IUsers {
  user_name: string;
  password: string;
  role: RoleUser;
}

export async function seedUsers(prisma: PrismaClient) {
  const users: IUsers[] = [
    {
      user_name: 'admin',
      password: '123456789',
      role: 'ADMIN',
    },
    {
      user_name: 'user',
      password: '123456789',
      role: 'USER',
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Users seeded successfully');
}
