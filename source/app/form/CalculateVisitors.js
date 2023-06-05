import React, { useState, useEffect } from "react";

const CalculateCost = (UserData) => {
  const [costData, setCostData] = useState(null);
  const StringNumberVisitors =
    UserData.visitors[0].toString() +
    "," +
    UserData.visitors[1].toString() +
    "," +
    UserData.visitors[2].toString() +
    "," +
    UserData.visitors[3].toString() +
    "," +
    UserData.visitors[4].toString() +
    "," +
    UserData.visitors[5].toString() +
    "," +
    UserData.visitors[6].toString() +
    "," +
    UserData.visitors[7].toString();

  const peticionBackEnd = `/backend/reservationCost/${StringNumberVisitors}`;
  useEffect(() => {
    fetch(peticionBackEnd)
      .then((res) => {
        if (!res.ok) {
          console.log("Network response was not ok");
        }
        const resClone = res.clone();
        return resClone.json();
      })
      .then((data) => setCostData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (costData) {
    //console.log("costData: ", costData[0].Total);
    UserData.totalPrice = costData[0].Total;
  }
};

export default CalculateCost;
