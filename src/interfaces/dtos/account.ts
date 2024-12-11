export interface CreateUserAccountDTO {
    type: string;
    googleId: string;
    name: string;
    avatar: string;
    country: string;
    phone: string;
}

export interface UpdateUserAccountDTO {
    type?: string;
    name?: string;
    avatar?: string;
    country?: string;
    phone?: string;
}