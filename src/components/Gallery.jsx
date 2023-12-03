import { useContext } from "react";
import { PicContext } from "../contexts/PicContext";
import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { pictures, setPictures } = useContext(PicContext);
  const handleLikeClick = (id) => {
    const updatedPictures = pictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, liked: !picture.liked };
      }
      return picture;
    });

    setPictures(updatedPictures);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {pictures.map((picture) => (
        <Card
          className="photo"
          key={picture.id}
          style={{
            height: "16rem",
            backgroundImage: `url(${picture.src.medium})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            position: "relative",
          }}
        >
          <button
            onClick={() => handleLikeClick(picture.id)}
            style={{
              position: "absolute",
              top: 5,
              right: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <IconHeart filled={picture.liked} />
          </button>
          <br />
          <Card.Body>
            <a href={picture.photographer_url}>
              <h1>{picture.photographer}</h1>
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
