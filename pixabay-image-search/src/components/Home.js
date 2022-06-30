import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { apiBaseUrl, apiKey } from "./util";
import axios from "axios";
import Images from "./Images";

export default function Home() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const handleChage = (evt) => {
    setText(evt.target.value);
  };

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${apiBaseUrl}?key=${apiKey}&q=${text}&image_type=photo&safesearch=true`
  //       );
  //       setImages(data.hits);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchImages();
  // }, [text]);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { data } = await axios.get(
      `${apiBaseUrl}?key=${apiKey}&q=${text}&image_type=photo&safesearch=true`
    );
    setImages(data.hits);
  };

  return (
    <div>
      <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Search Image"
          aria-label="Search"
          onChange={handleChage}
        />
        <MDBBtn color="dark">Search</MDBBtn>
      </form>
      <br />
      {text.length > 0 ? <Images images={images} /> : null}
    </div>
  );
}
