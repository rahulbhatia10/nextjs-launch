import Link from "next/link";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";

export const dynamicParams = True;

export async function generateStaticParams() {
  const pageType = process.env.GENERATE_PAGE_TYPE;

  if (pageType && pageType !== "all" && pageType !== "blog") {
    console.log("[SSG] Skipping blog pages (GENERATE_PAGE_TYPE=%s)", pageType);
    return [];
  }

  console.log("[SSG] Generating %d blog pages", blogs.length);
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return {
    title: blog?.title ?? "Blog Post",
    description: blog?.excerpt,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black font-sans">
      <article className="w-full max-w-3xl px-6 py-16 bg-white dark:bg-black">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          &larr; Back to Home
        </Link>

        <div className="mt-8 mb-4">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            Blog
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {blog.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
          <span>{blog.author}</span>
          <span>&middot;</span>
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 italic">
          {blog.excerpt}
        </p>

        <div className="mt-8 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {blog.content}
        </div>
      </article>
    </div>
  );
}
