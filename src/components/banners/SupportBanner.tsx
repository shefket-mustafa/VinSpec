import { Link } from "react-router";
import PeopleIcons from "../PeopleIcons";
import { useTranslation } from "react-i18next";

export default function SupportBanner() {

    const { t } = useTranslation();


    return(
        <div className="min-h-screen w-full flex flex-col justify-center items-center p-20 bg-cyan-50">

            <div className="text-center flex flex-col gap-3">
                <div className="flex items-center justify-center">
                <PeopleIcons />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">{t("supportBanner.title")}</h1>
                <h2 className="text-2xl font-bold">{t("supportBanner.subtitle")}</h2>
                <h3 className="text-xl"> {t("supportBanner.cta1")}{" "}<Link className="text-2xl font-bold underline" to='/contacts'>{t("supportBanner.link")}</Link>  {t("supportBanner.cta2")}</h3>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-15 justify-between py-10">

                <div className="flex flex-col items-center text-center">
                <svg viewBox="0 0 121 120" className="flex-1 flex flex-col items-center text-center h-15 w-15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.881 26.453c-2.302 1.229-3.913 3.367-4.873 6.12-4.13 8.786-15.841 17.693-23.96 22.956-8.64 5.6-11.574 17.166-6.692 26.315C17.948 88.57 24.968 92.5 32.196 92.5c.373 0 .745-.034 1.117-.052l17.944 14.067a9.402 9.402 0 0 0 5.826 2.008 9.444 9.444 0 0 0 4.45-1.108 9.4 9.4 0 0 0 4.96-7.505 9.414 9.414 0 0 0-3.584-8.258l-7.756-6.077c4.9-1.298 12.205-2.675 17.165-1.792 1.108.295 2.199.459 3.246.459 1.628 0 3.177-.364 4.58-1.117 8.197-4.38 7.877-19.866-.754-36.019-8.621-16.152-21.337-25.042-29.517-20.653h.008Zm26.826 50.223c-3.246 1.723-12.491-4.284-19.632-17.65-5.454-10.223-6.649-19.06-5.463-23.441.407-1.047.606-2.104 1.706-2.692 3.653-1.956 13.062 5.358 19.632 17.65 7.133 13.365 6.986 24.402 3.757 26.125v.008Z" fill="#0073F0"></path><path d="M79.4 47.106C70.776 30.954 58.06 22.064 49.88 26.453c-2.302 1.229-3.913 3.367-4.873 6.12-4.13 8.786-15.841 17.693-23.96 22.956-8.64 5.6-11.574 17.166-6.692 26.315C17.948 88.57 24.968 92.5 32.196 92.5c.373 0 .745-.034 1.117-.052" stroke="#000" strokeWidth="2.476" strokeMiterlimit="10"></path><path d="M106.537 23.657s-9.851 9.426-21.615 15.321M89.103 8.127s-3.55 13.158-10.57 24.298" stroke="#000" strokeWidth="2.503" strokeLinejoin="bevel"></path><path d="M120.014 38.212c-16.545 7.435-32.369 11.786-32.369 11.786s10.496.256 20.806 1.429" stroke="#000" strokeWidth="2.083" strokeLinejoin="bevel"></path><path d="M53.326 32.901c-1.1.59-1.298 1.645-1.705 2.693-1.186 4.371 0 13.218 5.462 23.44C64.224 72.4 73.469 78.409 76.715 76.686c3.238-1.731 3.385-12.768-3.756-26.125-6.57-12.292-15.98-19.598-19.633-17.65v-.008Z" fill="#AADCFF"></path><path d="M53.326 32.901c-1.1.59-1.298 1.645-1.705 2.693-1.186 4.371 0 13.218 5.462 23.44C64.224 72.4 73.469 78.409 76.715 76.686c3.238-1.731 3.385-12.768-3.756-26.125-6.57-12.292-15.98-19.598-19.633-17.65v-.008Z" stroke="#000" strokeWidth="2.476" strokeMiterlimit="10"></path></svg>
                <p className="font-bold text-2xl">97%</p>
                <p>{t("supportBanner.stats.satisfactionLabel")}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                <svg viewBox="0 0 120 120" className="flex-1 flex flex-col items-center text-center h-15 w-15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.017 61.829c3.319-20.897 22.95-37.835 43.848-37.835 20.897 0 35.14 16.938 31.822 37.835-3.319 20.897-22.951 37.835-43.848 37.835s-35.14-16.938-31.822-37.835Z" fill="#FFEB28"></path><path d="m62.953 34.87-5.126 32.282H75.8" stroke="#000" strokeWidth="3" strokeLinejoin="bevel"></path><path d="M87.267 85.864c-8.28 8.428-19.649 13.8-31.428 13.8-20.897 0-35.14-16.938-31.822-37.835 3.319-20.897 22.95-37.835 43.848-37.835 7.836 0 14.736 2.382 20.125 6.457" stroke="#000" strokeWidth="3" strokeLinejoin="bevel"></path><path d="M19 44.493S25.401 30.205 38.39 20M85.438 103.787s7.151-4.309 14.287-14.288" stroke="#000" strokeWidth="2.405" strokeLinejoin="bevel"></path></svg>                
                <p className="font-bold text-2xl">24/7</p>
                <p>{t("supportBanner.stats.accessLabel")}</p>
                </div>

                <div className="flex flex-col items-center text-center">
                <svg viewBox="0 0 121 120" className="flex-1 flex flex-col items-center text-center h-15 w-15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.881 26.453c-2.302 1.229-3.913 3.367-4.873 6.12-4.13 8.786-15.841 17.693-23.96 22.956-8.64 5.6-11.574 17.166-6.692 26.315C17.948 88.57 24.968 92.5 32.196 92.5c.373 0 .745-.034 1.117-.052l17.944 14.067a9.402 9.402 0 0 0 5.826 2.008 9.444 9.444 0 0 0 4.45-1.108 9.4 9.4 0 0 0 4.96-7.505 9.414 9.414 0 0 0-3.584-8.258l-7.756-6.077c4.9-1.298 12.205-2.675 17.165-1.792 1.108.295 2.199.459 3.246.459 1.628 0 3.177-.364 4.58-1.117 8.197-4.38 7.877-19.866-.754-36.019-8.621-16.152-21.337-25.042-29.517-20.653h.008Zm26.826 50.223c-3.246 1.723-12.491-4.284-19.632-17.65-5.454-10.223-6.649-19.06-5.463-23.441.407-1.047.606-2.104 1.706-2.692 3.653-1.956 13.062 5.358 19.632 17.65 7.133 13.365 6.986 24.402 3.757 26.125v.008Z" fill="#0073F0"></path><path d="M79.4 47.106C70.776 30.954 58.06 22.064 49.88 26.453c-2.302 1.229-3.913 3.367-4.873 6.12-4.13 8.786-15.841 17.693-23.96 22.956-8.64 5.6-11.574 17.166-6.692 26.315C17.948 88.57 24.968 92.5 32.196 92.5c.373 0 .745-.034 1.117-.052" stroke="#000" strokeWidth="2.476" strokeMiterlimit="10"></path><path d="M106.537 23.657s-9.851 9.426-21.615 15.321M89.103 8.127s-3.55 13.158-10.57 24.298" stroke="#000" strokeWidth="2.503" strokeLinejoin="bevel"></path><path d="M120.014 38.212c-16.545 7.435-32.369 11.786-32.369 11.786s10.496.256 20.806 1.429" stroke="#000" strokeWidth="2.083" strokeLinejoin="bevel"></path><path d="M53.326 32.901c-1.1.59-1.298 1.645-1.705 2.693-1.186 4.371 0 13.218 5.462 23.44C64.224 72.4 73.469 78.409 76.715 76.686c3.238-1.731 3.385-12.768-3.756-26.125-6.57-12.292-15.98-19.598-19.633-17.65v-.008Z" fill="#AADCFF"></path><path d="M53.326 32.901c-1.1.59-1.298 1.645-1.705 2.693-1.186 4.371 0 13.218 5.462 23.44C64.224 72.4 73.469 78.409 76.715 76.686c3.238-1.731 3.385-12.768-3.756-26.125-6.57-12.292-15.98-19.598-19.633-17.65v-.008Z" stroke="#000" strokeWidth="2.476" strokeMiterlimit="10"></path></svg>
                <p className="font-bold text-2xl">12-24min</p>
                <p>{t("supportBanner.stats.replyTimeLabel")}</p>
                </div>


            </div>

        </div>
    )
}