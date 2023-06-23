import React, { useState, useEffect } from "react";
export const GeographicDataFetcher = () => {
  let pais, provincias;
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    fetch("/backend/geographicInfo/")
      .then((res) => {
        if (!res.ok) {
          console.log("Network response was not ok");
        }
        const resClone = res.clone();
        return resClone.json();
      })
      .then((data) => setCountryData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (countryData) {
    pais = countryData.slice(0, countryData.length - 1);
    provincias = countryData[countryData.length - 1];
  }
  return { pais, provincias };
};
