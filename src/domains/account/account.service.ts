import { CreateUserAccountDTO, UpdateUserAccountDTO } from "@/interfaces/dtos/account";
import { AccountRepository } from "./account.repository";

export const AccountService = {
  async createAccount(dto: CreateUserAccountDTO) {
    return await AccountRepository.create(dto);
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

  async updateAccount(id: number, dto: UpdateUserAccountDTO) {
    return await AccountRepository.update(id, dto);
  },

  async deleteAccount(id: number) {
    return await AccountRepository.delete(id);
  },
};
