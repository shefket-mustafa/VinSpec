import CustomerReviewsItem from "../CustomerReviewItem";
import { customerReviews } from "../../mockData/mockData";

export default function CustomerReviews() {


    return(
        <div className="md:min-h-screen w-full">

            <div className="flex flex-col justify-center items-center gap-5 py-35 text-center">
                <h1 className="text-4xl md:6xl font-bold">Check our customer reviews</h1>
                <h3 className="text-lg px-5">Find out why do they use VinSpec for making better deals when buying a car</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:px-20">
            {customerReviews.map((review) => <CustomerReviewsItem key={review.customer.id} message={review.customer?.message} customer={review.customer?.customer}/>)}
            </div>

        </div>
    )
}