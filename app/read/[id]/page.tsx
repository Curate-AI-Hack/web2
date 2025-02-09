import { BlogPost } from "@/components/BlogPost"

export default async function BlogPostPage({ params }:  any) {

  const {id} = await params;
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-8">
        <BlogPost id={id} />
      </main>
    </div>
  )
}

