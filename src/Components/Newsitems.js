import React from "react";
import "./Newsitems.css";

const Newsitems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, element } = props;
  return (
    <div className="my-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="image-fluid">
          <img
            src={
              !imageUrl
                ? "https://store-images.microsoft.com/image/apps.52293.9007199266275245.a9ef703c-b140-4bd9-a8cd-514f2cfa983c.69f0cdb9-5097-4f80-8d1b-2657db90b723"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
