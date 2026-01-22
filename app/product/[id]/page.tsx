import PriceHistoryChart from "@/components/PriceHistoryChart";
import Navbar from "@/components/Navbar";
import PriceTable from "@/components/PriceTable";
import { products } from "@/lib/products";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: 40 }}>
          <h1>Product not found</h1>
        </div>
      </>
    );
  }

  return (
  <>
    <Navbar />

    <main className="mx-auto max-w-5xl px-10 py-16">
      {/* HEADER */}
      <section className="mb-8">
        <h1 className="text-6xl text-red-600">
          {product.name}
        </h1>
        <p className="text-gray-500">
          Compare prices across Irish retailers
        </p>
      </section>

      {/* BEST PRICE */}
      <section className="flex items-center justify-between border border-gray-200 rounded-xl p-6">
        <div>
          <p className="text-sm text-gray-500">Best price</p>
          <p className="text-3xl font-semibold">
            €{product.bestPrice}
          </p>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white font-medium hover:bg-indigo-700 transition">
          Go to store
        </button>
      </section>

      {/* COMPARISON */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4">
          Price comparison
        </h2>

        <PriceTable merchants={product.merchants} />
      </section>
      {/* PRICE HISTORY */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold mb-2">
          Price history
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Track how the price has changed over time
        </p>

        <PriceHistoryChart history={product.history} />
      </section>
    </main>
  </>
);
}