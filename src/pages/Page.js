import React, { useEffect, useState } from "react";
import axios from "axios";
import Page1 from "./Page1";

function Page(props) {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${props.cat}&apiKey=161dc1f30f4e49708bcb8825969b6432`
      )
      .then((res) => {
        setPageData(res.data);
        console.log(res.data);
      });
  }, []);

  if (!pageData) return null;

  return (
    <div>
      {pageData.articles.map((item) => {
        return (
          <Page1
            title={item.title}
            image={item.urlToImage}
            description={item.description}
            author={item.author}
          />
        );
      })}
    </div>
  );
}

export default Page;
