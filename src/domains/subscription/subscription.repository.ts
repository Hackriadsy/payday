import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class SubscriptionRepository {
  async createSubscription(data: {
    accountId: number;
    plan: string;
    startDate: Date;
    endDate: Date;
    status: string;
  }) {
    return prisma.subscription.create({
      data,
    });
  }

  async getAccountSubscriptions(accountId: number) {
    return prisma.subscription.findMany({
      where: { accountId },
    });
  }

  async updateSubscriptionStatus(id: string, status: string) {
    return prisma.subscription.update({
      where: { id },
      data: { status },
    });
  }

  async getSubscriptionById(id: string) {
    return prisma.subscription.findUnique({ where: { id } });
  }
}


