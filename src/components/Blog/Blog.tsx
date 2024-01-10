import React from "react";
import Image from "next/image"; 

interface BlogPost {
  img: string;
  title: string;
  url: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    // Your blog posts data here
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {posts.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt={item.title}
              width={500} // Set the width as per your design
              height={300} // Set the height as per your design
            />
            <h3 className="py-5 text-2xl">{item.title}</h3>
            <a
              href={item.url}
              className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
