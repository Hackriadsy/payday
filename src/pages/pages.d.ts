export enum AccountType {
    INDIVIDUAL = 'individual',
    BUSINESS = 'business',
}

export interface Plan {
    name: string;
    color?: 'success' | 'error' | 'warning' | 'info' | 'primary';
    currency?: string;
    amount: number;
    disabled?: boolean;
    description?: string;
    features?: string[];
}
