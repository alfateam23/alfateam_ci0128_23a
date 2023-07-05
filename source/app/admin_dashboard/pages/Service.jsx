import React, {useState} from "react";
import { ServicePage } from "./ServiceUtil/InsertServicePage";
import { InsertIDPage } from "./ServiceUtil/InsertIDPage";

export const Service = () => {
  // page = 0 first page, page = 1 second page
  const [page, setPage] = useState(0);
  const [visitorInfo, setVisitorInfo] = useState(null);

  return (
    <div>
      {page === 0 ? <InsertIDPage
      setPage={setPage}
      setVisitorInfo={setVisitorInfo}/> :
      <ServicePage visitorInfo={visitorInfo}/>}
    </div>
  );
};
