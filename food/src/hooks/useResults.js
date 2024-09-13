import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Función que realiza la búsqueda en la API de Yelp
  const searchApi = async (searchTerm) => {
    console.log(searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses); // Guardar los resultados
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong"); // Manejar error
    }
  };

  useEffect(() => {
    searchApi("pasta"); // Buscar por defecto "pasta"
  }, []);

  return [searchApi, results, errorMessage];
};
