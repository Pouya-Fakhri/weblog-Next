import blogsData from "../../data/blogs.json";

export default function BlogPage({ params }) {
  const { slug } = params;
  const id = slug;
  const blog = blogsData.find((blog) => blog.id == parseInt(id));
  console.log(id);
  console.log(blog);
  console.log(slug);

  if (!blog) {
    return <div> Blog not found</div>;
  }

  return (
    <div>
      <h1> blog name: {blog.name}</h1>
      <p>description: {blog.description}</p>
    </div>
  );
}
