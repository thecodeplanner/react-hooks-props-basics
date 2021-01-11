import React from "react";

function BlogContent(props) {
  console.log(props)

  if (!props.isPublished) return null

  return (
    <div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead}</p>
    </div>
  )
}

export default BlogContent;
