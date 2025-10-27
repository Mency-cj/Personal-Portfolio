"use client";

export default function BlogPage() {
  return (
    <>
      <div className="px-49">
        <div className="text-center pt-14 pb-24">
            <h1 className="font-light text-lg text-gray-500 pb-6">
                Blogging about my journey
            </h1>
            <h1 className="font-extrabold text-5xl">My <span className="text-amber-400">Blog</span></h1>
        </div>
        <div className="pb-32">
              <div className="text-center">
                        <h1 className="text-[25px] font-light pb-4">BLOG POSTS</h1>
                        <p className="pt-20 font-light text-neutral-600 text-[23px]">No blog posts found.....</p>
                    </div>            
        </div>
      </div>
    </>
  );
}