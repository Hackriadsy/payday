import { ItemHighlight } from "@app/components";
import clsx from "clsx";
import {
  Binoculars,
  FileDown,
  PackagePlus,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import { useState } from "react";

export default function Payrolls() {
  const [revealActions, setRevealActions] = useState(true);

  return (
    <div className="w-full h-full space-y-16">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary-content">
          Your Payrolls
        </h1>
        {/* View mode */}
        <div className="flex items-center ml-auto">
          <div
            className={clsx(
              "flex items-center gap-2",
              revealActions ? "visible" : "invisible"
            )}
          >
            <a
              href="/console/payrolls/beneficiaries"
              className="btn btn-circle flex items-center justify-center btn-primary btn-sm tooltip"
              data-tip="See Beneficiaries"
            >
              <Binoculars size={20} className="text-white" />
            </a>
            <button
              className="btn btn-circle flex items-center justify-center btn-primary btn-sm tooltip"
              data-tip="Create Payroll"
            >
              <PackagePlus size={20} className="text-white" />
            </button>
            <button
              className="btn btn-circle flex items-center justify-center btn-primary btn-sm tooltip"
              data-tip="Export Payrolls"
            >
              <FileDown size={20} className="text-white" />
            </button>
          </div>
          <div
            className={clsx(
              "divider divider-horizontal h-8 mx-5",
              revealActions ? "visible" : "invisible"
            )}
          ></div>
          <label className="swap text-secondary">
            <input
              type="checkbox"
              onChange={(e) => setRevealActions(e.target.checked)}
            />
            <PanelRightOpen size={24} className="swap-on" />
            <PanelRightClose size={24} className="swap-off" />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ItemHighlight
          endpoint={import.meta.env.VITE_API_URL + "/payrolls?top-rated=true"}
          errorText="Most rated payroll will be shown here, if available."
        />
      </div>
    </div>
  );
}
