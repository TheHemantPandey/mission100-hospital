import { redirect } from "next/navigation";

export default async function BlogSlugRedirectPage({ params }) {
  const { slug } = await params;
  redirect(`/blogs/${slug}`);
}
