import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AccountRepository = {
  async create(accountData: Partial<any>) {
    return await prisma.account.create({ data: accountData });
  },

  async findById(id: number) {
    return await prisma.account.findUnique({ where: { id } });
  },

  async findAll() {
    return await prisma.account.findMany();
  },

  async update(id: number, updateData: Partial<any>) {
    return await prisma.account.update({
      where: { id },
      data: updateData,
    });
  },

  async delete(id: number) {
    return await prisma.account.delete({ where: { id } });
  },
};
