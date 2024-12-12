import { Server } from "socket.io";

interface Subscription {
  id: string;
  planId: string;
  startDate: string;
  endDate?: string;
  [key: string]: any;
}

export class SubscriptionEvent {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  emitSubscriptionCreated(accountId: number, subscription: Subscription) {
    try {
      if (!accountId) throw new Error("Invalid userId");
      if (!subscription || !subscription.id) throw new Error("Invalid subscription data");

      this.io.to(accountId.toString()).emit("subscription_created", subscription);
      console.log(`Emitted subscription_created for user ${accountId}:`, subscription);
    } catch (error) {
      console.error(`Error emitting subscription_created for user ${accountId}:`, error);
    }
  }

  emitSubscriptionCancelled(accountId: number, subscription: Subscription) {
    try {
      if (!accountId) throw new Error("Invalid userId");
      if (!subscription || !subscription.id) throw new Error("Invalid subscription data");

      this.io.to(accountId.toString()).emit("subscription_cancelled", subscription);
      console.log(`Emitted subscription_cancelled for user ${accountId}:`, subscription);
    } catch (error) {
      console.error(`Error emitting subscription_cancelled for user ${accountId}:`, error);
    }
  }
}
