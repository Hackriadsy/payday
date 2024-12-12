import { SubscriptionService } from "@/domains/subscription/subscription.service";
import { Request, Response } from "express";

export const SubscriptionController = {
    //create new subscription
    async create(req: Request, res: Response): Promise<void>  {
        try {
            const { accountId, plan } = req.body;
            const subscription = await SubscriptionService.createSubscription(accountId, plan);
            res.status(201).json({
                message: 'Subscription created successfully'
             })
        } catch (error: any) {
            console.error('Subscription creation error:', error)
            res.status(500).json({
                  error: 'Failed to create subscription',
                  details: error instanceof Error ? error.message : 'Unknown error'
                });
        }
    },

    //cancel subscription
    async update (req: Request, res: Response): Promise<void>  {
        try {
          const { id } = req.params;
          const subscription = await SubscriptionService.cancelSubscription(id);
          res.status(200).json(subscription);
        } catch (error: any) {
          res.status(400).json({ message: error.message });
        }
    },

    //get active subscriptions
    async getById (req: Request, res: Response):Promise<void>  {
        try {
            const {accountId}  = req.params

            if (!accountId) {
            res.status(400).json({ 
            error: 'Account ID is required' 
            })
        }

            const activeSubscription = await SubscriptionService.getAccountSubscriptions(parseInt(accountId))

            if (!activeSubscription) {
            res.status(404).json({ 
              message: 'No active subscription found' 
            })
          }

              res.status(200).json(activeSubscription)
        } catch (error) {
        console.error('Fetching active subscription error:', error)
        res.status(500).json({ 
            error: 'Failed to fetch active subscription',
            details: error instanceof Error ? error.message : 'Unknown error'
        })
    }
  }


}