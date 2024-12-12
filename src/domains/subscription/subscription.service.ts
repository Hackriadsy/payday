import { SubscriptionRepository } from "./subscription.repository";

const subscriptionRepo = new SubscriptionRepository();

export const SubscriptionService = {
  calculateEndDate(plan: string): Date {
    const now = new Date();
    switch (plan) {
      case "PayFresh":
      case "PayCrech":
        return new Date(new Date().setMonth(now.getMonth() + 1));
      case "PaySilver":
      case "PayClever":
        return new Date(new Date().setMonth(now.getMonth() + 3));
      case "PayRiver":
        return new Date(new Date().setFullYear(now.getFullYear() + 1));
      default:
        return now; // PayFree doesn't expire
    }
  },

  async createSubscription(accountId: number, plan: string) {
    const endDate = this.calculateEndDate(plan);
    return subscriptionRepo.createSubscription({
      accountId,
      plan,
      startDate: new Date(),
      endDate,
      status: "Active",
    });
  },

  async getAccountSubscriptions(accountId: number) {
    return subscriptionRepo.getAccountSubscriptions(accountId);
  },

  async cancelSubscription(id: string) {
    return subscriptionRepo.updateSubscriptionStatus(id, "Cancelled");
  },
};

