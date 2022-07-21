import React from "react";
import Article from "./Article";
import { getByPlaceholderText } from '@testing-library/react';


export default function ArticleList(posts) {
    const postItems = posts.map((post) => {
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
      });

  return (
    <main>
      {postItems}
    </main>
  )
}

