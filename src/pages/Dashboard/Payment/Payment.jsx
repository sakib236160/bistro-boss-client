import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Add Pablishable key
const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>
    );
};

export default Payment;