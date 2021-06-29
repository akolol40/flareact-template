export async function getEdgeProps({ params }) {
  const { name } = params;
  const post = await getSomeRemotePost({ slug });

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }) {
   return post
}
