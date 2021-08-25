import axios from "axios";
import React, { useEffect, useState } from "react";

const SUCCESS = "success";

const ImageRequest = () => {
  const [imageSrc, setImageSrc] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getNewImage();
  }, []);

  const getNewImage = () => {
    setImageSrc(null);
    setErrorMsg(null);
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        const data = response.data;
        if (data?.status === SUCCESS) {
          setImageSrc(data.message);
        }
      })
      .catch((error) => {
        const errorData = error.response;
        if (errorData?.data?.message) {
          setErrorMsg(errorData.data.message);
        } else {
          setErrorMsg(error.message);
        }
      });
  };

  return (
    <div>
      <div>
        <button onClick={getNewImage}>Get new dog image</button>
      </div>
      {imageSrc && <img width="200px" src={imageSrc} alt="Dog" />}
      {errorMsg && (
        <small role="alert" style={{ color: "red" }}>
          {errorMsg}
        </small>
      )}
    </div>
  );
};

export default ImageRequest;
