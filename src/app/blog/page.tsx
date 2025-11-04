"use client";

export default function BlogPage() {
  return (
    <>
      <div className="px-49">
        <div className="text-center pt-14 pb-24">
          <h1 className="font-light text-lg text-gray-500 pb-6">
            Blogging about my journey
          </h1>
          <div className="relative">
            <h1 className="font-extrabold text-[56px]">
              MY <span className="text-amber-400">BLOG</span>
            </h1>
            <span className="absolute left-0 right-0 top-[50%] font-[800] tracking-[.8] text-[110px] transform -translate-y-1/2 text-[hsla(0,0%,100%,0.07)]">
              POSTS
            </span>
          </div>
        </div>
        <div className="pb-32">
          <div className="text-center">
            <h1 className="text-[25px] font-light pb-4">BLOG POSTS</h1>
            <p className="pt-20 font-light text-neutral-600 text-[23px]">
              No blog posts found.....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
