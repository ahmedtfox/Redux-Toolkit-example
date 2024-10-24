import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllPosts} from "./API";
import { Card, Alert } from "react-bootstrap";
function Post() {
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/posts";
  // Fetch posts when the component mounts
  useEffect(() => {
    dispatch(getAllPosts(url));
  }, [dispatch]);

  // Get the posts from the Redux store
  const posts = useSelector((state) => state.postsData.posts) || [];
  const status = useSelector((state) => state.postsData.status);
  const error = useSelector((state) => state.postsData.error);

  const pp = posts.map((p) => (
    <div key={p.id}>
      <Card
        bg={"secondary"}
        key={"secondary"}
        text={"white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>{p.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  if (status === "loading") {
    return <h1>loading...</h1>;
  } else if (status === "succeeded") {
    return <>{posts.length > 0 ? pp : <p>No posts available.</p>}</>;
  } else if (error) {
    return (
      <>
        {" "}
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </>
    );
  }
}

// Render the posts if available

export default Post;
