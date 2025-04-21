import notFoundPage from "@/app/not-found";
import blogsData from "../../../data/blogs.json";

export default function BlogPage({ params }) {
  const { slug } = params;
  const id = slug;
  const blog = blogsData.find((blog) => blog.id == parseInt(id));

  if (!blog) {
    return notFoundPage()
  }
  // throw new Error("Something went wrong!");

  return (
    <div
      key={blog.id}
      className="  px-5 py-3 flex flex-col min-h-screen justify-between "
    >
      <div className="blogDescrip">
        <h1 className=" text-4xl font-bold">{blog.name}</h1>
        <p className=" text-2xl font-semibold"> {blog.description}</p>
      </div>

      <div className="profileDescrip flex justify-between items-center">
        <h2 className="font-bold flex flex-col text-[1rem] ">
          <span className="font-light opacity-70 ">author</span>
          {blog.author.name}
        </h2>
        <p className="font-bold flex flex-col text-[1rem]">
          <span className="font-light opacity-70 ">email</span>
          {blog.author.email}
        </p>
        <p className="font-bold flex flex-col text-[1rem]">
          <span className="font-light opacity-70 ">bio</span>
          {blog.author.bio}
        </p>
        <p className="font-bold flex flex-col text-[1rem]">
          <span className="font-light opacity-70 ">twitter</span>
          {blog.author.social.twitter}
        </p>
        <p className="font-bold flex flex-col  text-[1rem]">
          <span className="font-light opacity-70 ">linkedin</span>
          {blog.author.social.linkedin}
        </p>
      </div>
      <h2 className=" text-3xl font-bold">Posts:</h2>
      <div className="postContainer flex justify-around ">
        {blog.posts.map((item) => {
          return (
            <div
              key={item.id}
              id={item.id}
              className=" border rounded-2xl w-[30%] border-[#4F98CA] flex flex-col justify-between gap-1.5 px-3 py-1.5 h-[285px]  overflow-y-scroll no-scrollbar  "
            >
              <h2 className="font-bold text-[24px]"> {item.title} </h2>
              <p className="text-justify text-[13px]"> {item.content} </p>
              <div className="tagContainer flex gap-1">
                {item.tags.map((tag) => (
                  <span className="bg-gray-500/70 text-[#EFFFFB]/70 rounded-[5px] p-1 text-[12px]">
                    {" "}
                    #{tag}{" "}
                  </span>
                ))}
              </div>
              <button className=" cursor-pointer rounded-[10px] border-[#50D890] bg-[#50D890] text-[#EFFFFB] w-[35%] h-[40px] flex justify-center items-center  p-1 ">
                Comments {item.comments.length}
              </button>
              <span className="self-end-safe ml-1.5 opacity-40">
                {" "}
                {item.date}{" "}
              </span>
              <div>
                {item.comments.map((comment) => {
                  return (
                    <div className="comments border border-[#50D890] p-1 mt-1.5 flex  flex-col rounded-[10px]">
                      <h3 className="font-bold flex flex-col text-[1rem]">
                        <span className="font-light opacity-70 ">
                          comment author
                        </span>
                        {comment.author}
                      </h3>

                      <p> {comment.text} </p>

                      <span className="self-end-safe opacity-40">
                        {" "}
                        {comment.date}{" "}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <p>Page views: {blog.analytics.pageViews} </p>

      <p>Average session duration: {blog.analytics.averageSessionDuration} </p>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const id = slug;
  const blog = blogsData.find((blog) => blog.id == parseInt(id));

  return {
    title: `Blog ${blog.name}`,
    description: `Description for blog post ${blog.description}`,
  };
}
