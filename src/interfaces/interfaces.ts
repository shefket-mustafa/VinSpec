export interface CarData {
    Make: string;
    Model: string;
    ModelYear: string;
    Trim: string;
    EngineConfiguration: string;
    EngineModel: string;
    BodyClass: string;
    PlantCountry: string;
    VehicleType: string;
    ManufacturerName: string;
  }

  export interface ReviewItem {
    message: string,
    customer: string,
}

export interface ServicesItemInterface {
    mvs: string;
    pricePerReport: string;
    yourPay: string;
    noDiscountPay: string;
    discount: string;
    checked: boolean;
    onSelect: () => void;
  }

  export interface VinState {
    data: CarData | null,
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null
  }