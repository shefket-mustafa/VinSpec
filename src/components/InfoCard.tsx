export default function InfoCard({ label, value }: { label: string; value?: string }) {
    return (
      <div className="border rounded-md p-3 bg-white shadow-sm">
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-medium">{value || "—"}</p>
      </div>
    );
  }