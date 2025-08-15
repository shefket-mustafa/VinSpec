import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CarData, VinState } from "../../interfaces/interfaces";
import { RootState } from "../store/store";

export const fetchVinData = createAsyncThunk("vin/fetchVinData", async (vin: string, { signal }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`, { signal })
    const json = await response.json();
    const vinData = json.Results[0];

    if(!vinData || !vinData.Make.trim()) return null;

    const mapped: CarData = {
        Make: vinData.Make || "",
        Model: vinData.Model || "",
        ModelYear: vinData.ModelYear || "",
        Trim: vinData.Trim || "",
        EngineConfiguration: vinData.EngineConfiguration || "",
        EngineModel: vinData.EngineModel || "",
        BodyClass: vinData.BodyClass || "",
        PlantCountry: vinData.PlantCountry || "",
        VehicleType: vinData.VehicleType || "",
        ManufacturerName: vinData.Manufacturer || "",
      };
      return mapped;
    
})

const initialState: VinState = {data: null, status: "idle", error: null}; 

const vinSlice = createSlice({
    name: "vin",
    initialState,
    reducers: {
        clearVin(state){
            state.data = null;
            state.status = "idle";
            state.error = null
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchVinData.pending, (state) => {
            state.status = "loading";
            state.error = null;
            state.data = null;
        })
        .addCase(fetchVinData.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchVinData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error?.message || "Request failed";
          });
    },
})

export const { clearVin } = vinSlice.actions;
export default vinSlice.reducer;

export const selectVinData = (state: RootState) => state.vin.data;
export const selectVinStatus = (state: RootState) => state.vin.status;
export const selectVinError = (state: RootState) => state.vin.error;