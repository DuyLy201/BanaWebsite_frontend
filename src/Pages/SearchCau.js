import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer"; // Assuming you have a Footer component
import myImage from "../Assets/Images/Bilingual.jpg";
import "./SearchCau.css";
import axios from "axios";
import { Environments } from "../environment";

function SearchCau() {
  const location = useLocation();
  const { selectedItem, language } = location.state || {};
  const [relatedItems, setRelatedItems] = useState([]);

  // const handleOnClickSearchValue = (item) => {
  //   // navigate(`/translation/${item.id}`);
  //   navigate('/searchresult', { state: { selectedItem: item, language: language} });
  // };

  useEffect(() => {
    if (selectedItem) {
      // Make an API call to fetch related items based on selectedItem.tiengViet
      axios
        .get(
          `${Environments.API_URL}/related?searched_word=${selectedItem.tiengViet}&language=${language}`
        )
        .then((response) => {
          setRelatedItems(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });

      axios.post("http://link", { x: 10, y: 20 });
    }
  }, [selectedItem, language]);

  return (
    <>
      <Intro />
      <div style={{ width: "100vw" }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>
      <div className="main">
        <h1 style={{ marginTop: "40px" }}>Kết quả tra cứu câu</h1>
        {selectedItem ? (
          <div className="result-container">
            <div className="result-column-left">
              <p
                style={{ textAlign: "center", borderBottom: "1px solid #000" }}
              >
                {" "}
                Tiếng Việt{" "}
              </p>
              <p>{selectedItem.tiengViet}</p>{" "}
              {relatedItems.length > 0 ? (
                <div className="related-items"></div>
              ) : (
                <p>No related items found</p>
              )}
            </div>
            <div className="result-column-right">
              <p
                style={{ textAlign: "center", borderBottom: "1px solid #000" }}
              >
                {" "}
                Tiếng Bana ({language})
              </p>
              <p>
                <span>{selectedItem.tiengBana}</span>
              </p>{" "}
              {/* Assuming selectedItem has a bahna property */}
            </div>
          </div>
        ) : (
          <p>No item selected</p>
        )}
      </div>
    </>
  );
}

export default SearchCau;
