import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CarData, VinStateWithReq } from "../../interfaces/interfaces";
import { RootState } from "../store/store";

export const fetchVinData = createAsyncThunk<CarData | null, string>("vin/fetchVinData", async (vin: string, { signal }) => {
    try{

        console.log('Fetch started');
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`, { signal })
        const json = await response.json();
        const vinData = json?.Results[0];
        
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
    }catch(err){
        if (err.name === "AbortError") {
            console.warn("FETCH ABORTED for", vin);
            throw err; // rethrow so RTK knows it was aborted
          }
          throw err;
    }
    
})

const initialState: VinStateWithReq = {data: null, status: "idle", error: null}; 

const vinSlice = createSlice({
    name: "vin",
    initialState,
    reducers: {
        clearVin(state){
            state.data = null;
            state.status = "idle";
            state.error = null;
            state.currentRequestId = undefined;
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchVinData.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
            state.data = null;
            state.currentRequestId = action.meta.requestId; // track latest

        })
        .addCase(fetchVinData.fulfilled, (state, action) => {
             // only accept if this is the latest request
        if (state.currentRequestId !== action.meta.requestId) return;
        state.status = "succeeded";
        state.data = action.payload;
        state.currentRequestId = undefined;
        })
        .addCase(fetchVinData.rejected, (state, action) => {
            if (state.currentRequestId !== action.meta.requestId) return;
            // In StrictMode you might see an abort
            if (action.error.name === "AbortError") {
              state.status = "idle";
              state.error = null;
            } else {
              state.status = "failed";
              state.error = action.error?.message || "Request failed";
            }
            state.currentRequestId = undefined;
          });
          ;
    },
})

export const { clearVin } = vinSlice.actions;
export default vinSlice.reducer;

export const selectVinData = (state: RootState) => state.vin.data;
export const selectVinStatus = (state: RootState) => state.vin.status;
export const selectVinError = (state: RootState) => state.vin.error;