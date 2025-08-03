
interface ReviewItem {
    message: string,
    customer: string,
}


export default function CustomerReviewsItem({message, customer} : ReviewItem) {

    return(

        <div className="relative h-75 w-85 md:h-80 md:w-90 border-1 justify-between py-7 border-gray-300 rounded-2xl flex flex-col px-10">
            <p>{message}</p>

            <div className="flex gap-10 justify-between">
            <svg className="absolute top-0 left-5 -translate-y-1/2 h-10 text-amber-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path fill="currentColor" d="M21.933 8.344a1.14 1.14 0 0 0-1.22-1.14c-2.817.212-8.504 1.25-13.005 5.42-7.07 6.546-8.587 20.36-3.527 25.432 5.055 5.07 13.415 2.756 16.745-4.007 3.33-6.759-1.198-14.313-9.857-13.267 0 0 .84-7.162 9.887-10.063.578-.186.977-.718.977-1.326V8.34v.004Zm24.797 0a1.14 1.14 0 0 0-1.22-1.14c-2.817.212-8.504 1.25-13.005 5.42-7.07 6.546-8.587 20.36-3.528 25.432 5.056 5.07 13.416 2.756 16.746-4.007 3.33-6.759-1.198-14.313-9.857-13.267 0 0 .84-7.162 9.887-10.063.578-.186.977-.718.977-1.326V8.34v.004Z"></path></svg>
                <div className="flex gap-2 justify-center items-center">
                <div className="flex size-4 items-center justify-center rounded-full bg-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="25" height="25" aria-hidden="true" data-slot="icon" className="text-blue-700 text-lg"><path fill="currentColor" fillRule="evenodd" d="M9.8 5.45a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm.177 2.256a3 3 0 1 0-3.954 0A5.594 5.594 0 0 0 2.4 12.95a.6.6 0 0 0 1.2 0A4.39 4.39 0 0 1 8 8.55a4.39 4.39 0 0 1 4.4 4.4.6.6 0 0 0 1.2 0 5.593 5.593 0 0 0-3.623-5.244Z" clipRule="evenodd"></path></svg></div>
                <p>{customer}</p>
                </div>

                <div className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-5 _root_1o0ex_1 _xs_1o0ex_11 _icon_1styv_121" aria-hidden="true" focusable="false"><path stroke="currentColor" d="M3 8.37l3.608 3.2L13 4.429"></path></svg>
                <p className="text-xs bg-green-600 px-1 py-1">Verified</p>
                </div>

            </div>
        </div>
    )
}