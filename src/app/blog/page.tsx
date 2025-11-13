"use client";

export default function BlogPage() {
  return (
    <>
      <div className="lg:px-49 px-3">
        <div className="text-center pt-14 pb-24">
          <h1 className="font-light text-lg text-gray-500 pb-6">
            Blogging about my journey
          </h1>
          <div className="relative">
            <h1 className="font-extrabold md:text-[56px] text-[40px]">
              MY <span className="text-amber-400">BLOG</span>
            </h1>
            <span className="absolute left-0 right-0 top-[50%] font-[800] tracking-[.8] md:text-[110px] text-[70px] transform -translate-y-1/2 text-[hsla(0,0%,100%,0.07)]">
              POSTS
            </span>
          </div>
        </div>
        <div className="pb-32">
          <div className="text-center">
            <h1 className="md:text-[25px] text-[23px] font-light pb-4">BLOG POSTS</h1>
            <p className="pt-20 font-light text-neutral-600 md:text-[23px] text-[18px]">
              No blog posts found.....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
