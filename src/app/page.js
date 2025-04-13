import Link from "next/link";
import blogsData from "../data/blogs.json"


export default function Home() {
  return (
    <div className="felx"  >
      {blogsData.map((item) => {
        return (
          <div className=" border border-cyan-100 w-[49%] p-2" key={item.id} >
            <h2>{item.name}</h2>
            <p className="text-[12px]" >{item.description}</p>
            <Link href={`/${item.id}`} >learn more ...</Link>
          </div>
        );
      })}
    </div>
  );
}
