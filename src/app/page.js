import Link from "next/link";
import blogsData from "../data/blogs.json";

export default function Home() {
  return (
    <div className="flex flex-col gap-4  p-7">
      <h1 className="text-4xl font-bold" >Blogs List</h1>
      <div className="listContainer justify-between flex flex-wrap gap-5  ">
        {blogsData.map((item) => {
          return (
            <div
              className=" border border-[#4F98CA] w-[30%] h-[25vh] p-3 rounded-2xl flex flex-col justify-around"
              key={item.id}
            >
              <h2 className=" text-2xl">{item.name}</h2>
              <p className="text-[12px]">{item.description}</p>
              <Link href={`/${item.id}`}>
                <div className=" border rounded-[10px] border-[#50D890] bg-[#50D890] text-[#EFFFFB] w-[45%] h-[40px] flex justify-center items-center  p-1 ">
                  learn more ...
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
