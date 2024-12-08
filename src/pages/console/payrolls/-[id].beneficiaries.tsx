
import { useParams } from "react-router-dom";

export default function PayrollsBeneficiaries() {
    const { id } = useParams();
    return (
        <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-content">
                Beneficiaries for Payroll ID: {id}
            </h1>
        </div>
    );
}