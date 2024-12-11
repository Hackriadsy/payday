import { AccountService } from "@/domains/account/account.service";
import { Request, Response } from "express";

export const AccountController = {
  async create(req: Request, res: Response) {
    try {
      const account = await AccountService.createAccount(req.body);
      res.status(201).json(account);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      //const id = req.params.id;
      const account = await AccountService.getAccountById(id);
      res.status(200).json(account);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const accounts = await AccountService.getAllAccounts();
      res.status(200).json(accounts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedAccount = await AccountService.updateAccount(id, req.body);
      res.status(200).json(updatedAccount);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await AccountService.deleteAccount(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
