import clsx from "clsx";
import {
  ArrowLeft,
  Binoculars,
  FileDown,
  PackagePlus,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import { useState } from "react";

export default function Payrolls() {
  const [revealActions, setRevealActions] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary-content">
          Your Payrolls
        </h1>
        {/* View mode */}
        <div className="flex items-center gap-1 ml-auto">
          <div
            className={clsx(
              "flex items-center gap-2",
              revealActions ? "visible" : "invisible"
            )}
          >
            <a
              href="/console/payrolls/beneficiaries"
              className="btn btn-circle flex items-center justify-center btn-primary btn-md tooltip"
              data-tip="See Beneficiaries"
            >
              <Binoculars size={24} className="text-white" />
            </a>
            <button
              className="btn btn-circle flex items-center justify-center btn-primary btn-md tooltip"
              data-tip="Create Payroll"
            >
              <PackagePlus size={24} className="text-white" />
            </button>
            <button
              className="btn btn-circle flex items-center justify-center btn-primary btn-md tooltip"
              data-tip="Export Payrolls"
            >
              <FileDown size={20} className="text-white" />
            </button>
          </div>
          <div
            className={clsx(
              "divider divider-horizontal h-full mx-5",
              revealActions ? "visible" : "invisible"
            )}
          >
            <ArrowLeft size={24} className="text-secondary-content" />
          </div>
          <label className="swap text-secondary">
            <input
              type="checkbox"
              onChange={(e) => setRevealActions(e.target.checked)}
            />
            <PanelRightOpen size={36} className="swap-on" />
            <PanelRightClose size={36} className="swap-off" />
          </label>
        </div>
      </div>
    </div>
  );
}
