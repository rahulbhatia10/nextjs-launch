import Link from "next/link";
import { blogs } from "@/data/blogs";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black font-sans">
      <main className="w-full max-w-3xl px-6 py-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          SSG POC — Independent Page Generation
        </h1>
        <p className="mt-3 text-zinc-500 dark:text-zinc-400 leading-7">
          This project demonstrates generating two different page types
          independently at build time using{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono dark:bg-zinc-800">
            GENERATE_PAGE_TYPE
          </code>{" "}
          environment variable.
        </p>

        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Build commands:
          </p>
          <ul className="space-y-1 text-sm font-mono text-zinc-600 dark:text-zinc-400">
            <li>
              <code>npm run build:blog</code> — only blog pages
            </li>
            <li>
              <code>npm run build:products</code> — only product pages
            </li>
            <li>
              <code>npm run build</code> — all pages
            </li>
          </ul>
        </div>

        {/* Blog Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
            Blog Posts
            <span className="text-sm font-normal text-zinc-400">
              ({blogs.length} pages)
            </span>
          </h2>
          <div className="mt-4 space-y-4">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="block rounded-lg border border-zinc-200 p-5 transition-all hover:border-blue-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-blue-700"
              >
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {blog.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {blog.excerpt}
                </p>
                <p className="mt-2 text-xs text-zinc-400">
                  {blog.author} &middot; {blog.date}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Products
            <span className="text-sm font-normal text-zinc-400">
              ({products.length} pages)
            </span>
          </h2>
          <div className="mt-4 space-y-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block rounded-lg border border-zinc-200 p-5 transition-all hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-700"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {product.name}
                  </h3>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
