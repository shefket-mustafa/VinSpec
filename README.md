# 🚗 VinSpec - Vehicle Inspection Reports

VinSpec is a **React** application built with **TypeScript** that provides detailed and accurate **vehicle inspection reports**. It helps users make informed decisions when buying or selling cars by offering transparent, reliable, and easy-to-understand inspection data.

## 🎯 Scope

VinSpec offers a **subscription-based** service for vehicle inspection reports, but for testing and demonstration purposes, it mimics the functionality of a **free version**. Users can access basic vehicle inspection information, with premium features available to subscribers.

### ✨ Key Features:
- **Vehicle Inspection Reports**: Get detailed reports about a vehicle's condition based on its VIN (Vehicle Identification Number).
- **Subscription Model**: While the app simulates a free service, it includes a subscription feature that provides more in-depth reports and advanced tools for users who sign up for premium access which is an idea for a future real-world project.
- **Real-time Data**: The app fetches vehicle data from an external API to provide the most up-to-date information about cars.

  **Note:** The data provided by the API in the free version might not always be fully accurate, as it relies on limited information from a free source. Some vehicle details may be incomplete or missing.
  
## 🌐 Live Demo

You can view the live demo of the application here: [VinSpec - Vehicle Inspection Reports](https://vin-spec.vercel.app/)

## 🛠 Tech Stack

This project is built using modern web technologies to ensure responsiveness, accessibility, and a smooth user experience.

- **React**: The core framework for building the user interface.
- **TypeScript**: Adds static typing to JavaScript, improving maintainability and reducing bugs.
- **Material UI**: A popular React UI framework that provides a set of pre-designed components to help speed up development.
- **Tailwind CSS**: A utility-first CSS framework used for custom styling, making it easy to create responsive and modern designs.

## 💻 How to Run Locally

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:shefket-mustafa/VinSpec.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd VinSpec
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

## 🔌 Used API

This project uses the **NHTSA VPIC API** as a free service to decode VIN numbers and provide detailed vehicle information.  
Endpoint used:  
```
https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${cleanedVin}?format=json
```
