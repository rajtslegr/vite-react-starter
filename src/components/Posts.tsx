import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?limit=10',
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const Posts = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold">Posts - React Query</h2>
      <ul className="space-y-4">
        {data?.map((post) => (
          <li key={post.id} className="rounded-lg border p-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
