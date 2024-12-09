import {
  GlobalActivityFooter,
  PayrollTransferChart,
  PayrollTransferMonthData,
} from "@app/components";
import { FolderOutput, Users2 } from "lucide-react";

const payrollData: PayrollTransferMonthData[] = [
  {
    name: "Jan",
    payrolls: {
      engineering: [
        { day: 5, amount: 45000 },
        { day: 20, amount: 50000 },
      ],
      sales: [
        { day: 3, amount: 30000 },
        { day: 25, amount: 35000 },
      ],
      support: [
        { day: 7, amount: 25000 },
        { day: 28, amount: 28000 },
      ],
    },
  },
  {
    name: "Feb",
    payrolls: {
      engineering: [
        { day: 4, amount: 48000 },
        { day: 22, amount: 52000 },
      ],
      sales: [
        { day: 6, amount: 33000 },
        { day: 26, amount: 37000 },
      ],
      support: [
        { day: 10, amount: 26000 },
        { day: 28, amount: 30000 },
      ],
      marketing: [
        { day: 15, amount: 40000 },
        { day: 28, amount: 42000 },
      ],
    },
  },
  {
    name: "Mar",
    payrolls: {
      engineering: [
        { day: 2, amount: 50000 },
        { day: 21, amount: 55000 },
      ],
      sales: [
        { day: 5, amount: 35000 },
        { day: 24, amount: 40000 },
      ],
      support: [
        { day: 8, amount: 27000 },
        { day: 26, amount: 32000 },
      ],
      customer_success: [
        { day: 12, amount: 38000 },
        { day: 28, amount: 41000 },
      ],
    },
  },
];

export default function Analytics() {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary-content">Account Analytics</h1>
      <section className="h-full flex flex-col gap-8 my-10 items-center justify-between">
        <div className="stats stats-vertical lg:stats-horizontal w-full border border-slate-300">
          <div className="stat bg-primary text-white">
            <div className="stat-title text-white">Total Payrolls</div>
            <div className="stat-value">22</div>
            <div className="stat-desc text-white">
              Next 24-hour estimate: ₦2.5M
            </div>
            <div className="stat-actions">
              <a href="/console/schedule" className="btn btn-sm btn-secondary">
                Go to Schedule
              </a>
            </div>
          </div>
          <div className="stat bg-white text-secondary">
            <div className="stat-figure">
              <Users2 size={32} />
            </div>
            <div className="stat-title text-secondary">Total Beneficiaries</div>
            <div className="stat-value">211</div>
            <div className="stat-desc text-secondary">
              1.4% more than last month
            </div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-outline text-secondary">
                See New Beneficiaries
              </button>
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FolderOutput size={32} />
            </div>
            <div className="stat-title text-primary">Total Expenses</div>
            <div className="stat-value">₦1.5M</div>
            {/* TODO: stat-desc will be a dropdown to select either this month, last month, or last year */}
            <div className="stat-desc text-primary">As at 12:00 PM today</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-ghost text-white p-0 hover:px-3">
                See History
              </button>
            </div>
          </div>
        </div>
        {/* Comparisons of the last three months expenses on a chart */}
        <PayrollTransferChart data={payrollData} />
        {/* Recent (all) users activities without PII details reviewed */}
        <GlobalActivityFooter />
      </section>
    </div>
  );
}
