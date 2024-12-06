import { AccountRepository } from "./account.repository";

export const AccountService = {
  async createAccount(accountData: Partial<any>) {
    return await AccountRepository.create(accountData);
  },

  async getAccountById(id: number) {
    const account = await AccountRepository.findById(id);
    if (!account) {
      throw new Error("Account not found");
    }
    return account;
  },

  async getAllAccounts() {
    return await AccountRepository.findAll();
  },

  async updateAccount(id: number, updateData: Partial<any>) {
    return await AccountRepository.update(id, updateData);
  },

  async deleteAccount(id: number) {
    return await AccountRepository.delete(id);
  },
};
