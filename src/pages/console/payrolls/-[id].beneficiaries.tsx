
import { useParams } from "react-router-dom";

export default function PayrollsBeneficiaries() {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-primary-content">
                Beneficiaries for Payroll ID: {id}
            </h1>
        </div>
    );
}