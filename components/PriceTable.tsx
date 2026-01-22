type Merchant = {
  name: string;
  price: number;
};

export default function PriceTable({
  merchants,
}: {
  merchants: Merchant[];
}) {
  const cheapest = Math.min(...merchants.map((m) => m.price));

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium">
              Retailer
            </th>
            <th className="px-4 py-3 text-right font-medium">
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {merchants.map((m) => (
            <tr
              key={m.name}
              className={
                m.price === cheapest
                  ? "bg-indigo-50 font-semibold"
                  : ""
              }
            >
              <td className="px-4 py-3">{m.name}</td>
              <td className="px-4 py-3 text-right">
                €{m.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}