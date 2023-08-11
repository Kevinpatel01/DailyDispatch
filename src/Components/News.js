import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import "./News.css";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=29644e4b69374a82b694c8d329c92af2&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <div className="news">
        <h1 className="text-center">
          DailyDispatch - Top Headlines on{" "}
          {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
        <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div className="row">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            {articles
              .filter((element) => {
                return search.toLowerCase() === ""
                  ? element
                  : (element.title ?? "").toLowerCase().includes(search);
              })
              .map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <Newsitems
                      title={element.title ? element.title.slice(0,100) : ""}
                      description={
                        element.description ? element.description.slice(0,200) : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page >= Math.ceil(totalResults / props.pageSize)}
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
