import { useContext } from "react";
import { PicContext } from "../contexts/PicContext";
import Card from "react-bootstrap/Card";

const Favorites = () => {
  const { pictures } = useContext(PicContext);
  //relizamos un flitrado de las card que contienen el valor true
  const likedPictures = pictures.filter((picture) => picture.liked);

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {likedPictures.map((picture) => (
          <Card
            className="photo"
            key={picture.id}
            style={{
              height: "10rem",
              backgroundImage: `url(${picture.src.medium})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              position: "relative",
            }}
          >
            <Card.Body>
              <a href={picture.photographer_url}>
                <h1>{picture.photographer}</h1>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
