import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Images = (props) => {
  const { images } = props;

  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4">
      {images.map((ele) => (
        <MDBCol key={ele.id}>
          <Link to={`/images/${ele.id}`}>
            <MDBCardImage src={ele.largeImageURL} alt="..." position="top" />
          </Link>
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default Images;
