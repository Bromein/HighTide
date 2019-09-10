import React, { useEffect, useState } from "react";
import { Wrap } from "../../sharedStyles/sharedStyles";

const ArtPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetch(
        "https://api.instagram.com/oembed?url=https://www.instagram.com/hightidetattoofl/"
      );
      const data = await posts.json();
      console.log(data);
    };
    fetchPosts();
  });
  return (
    <Wrap>
      <h1>Art Page</h1>
    </Wrap>
  );
};

export default ArtPage;
