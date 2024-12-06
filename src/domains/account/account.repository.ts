import { CreateUserAccountDTO, UpdateUserAccountDTO } from "@/interfaces/dtos/account";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AccountRepository = {
  async create(dto: CreateUserAccountDTO) {
    return await prisma.account.create({ data: dto });
  },

  async findById(id: number) {
    return await prisma.account.findUnique({ where: { id } });
  },

  async findAll() {
    return await prisma.account.findMany();
  },

  async update(id: number, dto: UpdateUserAccountDTO) {
    return await prisma.account.update({
      where: { id },
      data: dto,
    });
  },

  async delete(id: number) {
    return await prisma.account.delete({ where: { id } });
  },
};
