import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

function PostList() {
  //const posts = useSelector((state)=> state.posts)
  const posts = useSelector(selectAllPosts);
  console.log("post", posts);
  const renderPosts = posts.map((postVal) => (
    <div className="map" key={postVal.id}>
      <h3> ID : {postVal.id}</h3>
      <p>Title : {postVal.title}</p>
      <i>Content : {postVal.content}</i>
    </div>
  ));
  return (
    <div>
      <h1> Posts</h1>
      <div>{renderPosts}</div>
    </div>
  );
}

export default PostList;
