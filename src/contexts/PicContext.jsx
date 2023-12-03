import { createContext, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
//El import del json no se realizó por dar error aunque en App.Jsx estaba importado
export const PicContext = createContext();

const PHOTO_URL = "/photos.json";

const PicContextProvider = ({ children }) => {
  const [pictures, setPictures] = useState([]);
  //Se agregaron uno detalles de interaccíon con el usuario en caso de error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // En este contexto se realizó la petición al json interno
  //también se pudo haber hecho la petición en la carpeta Utils
  //y se actualizaba el estado global utilizando el hook useContext

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(PHOTO_URL);
        if (!res.ok) {
          throw new Error("Error al obtener datos");
        }
        const data = await res.json();
        const photosArray = data.photos || [];
        setPictures(photosArray);
        console.table(pictures);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <p>Error: No se pudo realizar la consulta: {error}</p>;
  }

  return (
    <PicContext.Provider value={{ pictures, setPictures }}>
      {children}
    </PicContext.Provider>
  );
};

export default PicContextProvider;
