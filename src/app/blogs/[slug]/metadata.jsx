export async function generateMetadata( {params} ) {
    const {slug} = await  params;
  
    console.log(slug)
  
    return {
      title: `Blog ${slug}`,
      description: `Description for blog post ${slug}`,
    };
  }