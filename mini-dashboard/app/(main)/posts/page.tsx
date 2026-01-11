import PostsTable from '@/components/posts/PostsTable';
import PostsPagination from '@/components/posts/PostsPagination';
import BackButton from '@/components/BackButton';

const PostsPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;