import { AccountType, Plan } from '../pages/pages.d';

export const plans: Record<string, Plan[]> = {
    [AccountType.INDIVIDUAL]: [
        {
            name: 'PayFresh',
            amount: 899,
            currency: 'NGN',
            description: 'Monthly',
            features: [
                'Up to 10 payrolls per month',
                'Up to 10 beneficiaries per payroll',
                '24/7 customer support',
            ],
            color: 'primary'
        },
        {
            name: 'PaySilver',
            amount: 2499,
            currency: 'NGN',
            description: 'Quarterly',
            features: [
                'Up to 35 payrolls over 3 months',
                'Up to 10 beneficiaries per payroll',
                '24/7 customer support',
                'Discounted pricing',
            ],
            color: 'warning'
        }
    ],
    [AccountType.BUSINESS]: [
        {
            name: 'PayCreche',
            amount: 1999,
            currency: 'NGN',
            description: 'Monthly',
            features: [
                'Up to 20 payrolls per month',
                'Up to 20 beneficiaries per payroll',
                '24/7 customer support',
            ],
            color: 'primary'
        },
        {
            name: 'PayClever',
            amount: 5499,
            currency: 'NGN',
            description: 'Quarterly',
            features: [
                'Up to 70 payrolls over 3 months',
                'Up to 20 beneficiaries per payroll',
                '24/7 customer support',
                'Discounted pricing',
            ],
            color: 'warning'
        },
        {
            name: 'PayRiver',
            amount: 14999,
            currency: 'NGN',
            description: 'Yearly',
            features: [
                'Unlimited payrolls',
                'Unlimited beneficiaries per payroll',
                '24/7 customer support',
                'Discounted pricing',
            ],
            color: 'info'
        }
    ]
}

export const accountTypes = Object.values(AccountType);

export const commonPlans: Plan[] = [
    {
        name: 'PayFree',
        amount: 0,
        currency: 'NGN',
        description: 'Free for a year',
        features: [
            'Up to 2 payrolls per month',
            'Up to 3 beneficiaries per payroll',
            'Limited customer support (up to 48 hours)',
        ],
        color: 'error'
    },
    {
        name: 'PayDay Pass',
        amount: 29999,
        currency: 'NGN',
        description: 'Monthly (for businesses with branches and large workforce)',
        disabled: true,
        features: [
            'Up to 50 branches with up to 100 beneficiaries per payroll',
            'Up to 50 payrolls per branch per month',
            'Branch-level access control',
            '24/7 customer support',
            'Access to PayGuardian (Fraud Detection and Security Bot) for monitoring unusual activities',
            'Beta (up to 14 days) access to new Payday products like Payday A+ and Payday E+',
        ],
        color: 'success'
    }
]