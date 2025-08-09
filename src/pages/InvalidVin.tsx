import { useNavigate } from "react-router";

export default function InvalidVin() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      
      <div className="text-6xl mb-4">🚗💥</div>

      <h1 className="text-3xl font-bold mb-2">VIN Not Found</h1>
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, we couldn't find any records for this VIN. Please double-check the number
        and try again.
      </p>

      <button
        onClick={() => navigate('/')}
        className="bg-amber-300 py-2 px-6 rounded-full font-semibold hover:bg-amber-400 transition"
      >
        Go Back
      </button>
    </div>
  );
}
