import Link from "next/link";
import { products, getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const pageType = process.env.GENERATE_PAGE_TYPE;

  if (pageType && pageType !== "all" && pageType !== "products") {
    console.log(
      "[SSG] Skipping product pages (GENERATE_PAGE_TYPE=%s)",
      pageType
    );
    return [];
  }

  console.log("[SSG] Generating %d product pages", products.length);
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  return {
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black font-sans">
      <div className="w-full max-w-3xl px-6 py-16 bg-white dark:bg-black">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          &larr; Back to Home
        </Link>

        <div className="mt-8 mb-4">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200">
            {product.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h1>

        <p className="mt-4 text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
          ${product.price.toFixed(2)}
        </p>

        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Features
          </h2>
          <ul className="mt-4 space-y-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
