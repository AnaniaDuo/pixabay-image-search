import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl, apiKey } from "./util";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import axios from "axios";

function SingleImage() {
  const { id } = useParams();
  const [singleImage, setSingleImage] = useState(null);

  useEffect(() => {
    const fetchSingeImage = async () => {
      try {
        const { data } = await axios.get(
          `${apiBaseUrl}?key=${apiKey}&id=${id}`
        );
        setSingleImage(data.hits);
        console.log("data from singleImage", singleImage);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingeImage();
  }, [id]);

  return (
    <>
      {Array.isArray(singleImage) && (
        <MDBCard className="mb-3" style={{ padding: "1rem" }}>
          <MDBCardImage
            position="top"
            src={singleImage[0].largeImageURL}
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>{singleImage[0].tags}</MDBCardTitle>
            <MDBCardText>
              <small className="text-muted">By {singleImage[0].user}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
}

export default SingleImage;
