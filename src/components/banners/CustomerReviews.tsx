import CustomerReviewsItem from "../CustomerReviewItem";
import { customerReviews } from "../../mockData/mockData";
import { useTranslation } from "react-i18next";

export default function CustomerReviews() {

    const { t } = useTranslation();


    return(
        <div className="md:min-h-screen w-full">

            <div className="flex flex-col justify-center items-center gap-5 py-35 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">{t("customerReviews.title")}</h1>
                <h3 className="text-lg px-5">{t("customerReviews.subtitle")}</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:px-20">
            {customerReviews.map((review) => 
            <CustomerReviewsItem 
            key={review.customer.id} 
            message={t(`customerReviews.items.${review.customer.id}.message`)}
            customer={t(`customerReviews.items.${review.customer.id}.customer`)}
            />)}
            </div>

        </div>
    )
}