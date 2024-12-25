import React, { useEffect, useState } from "react";
// import WordList from "../Components/WordList";
import Intro from "../Components/Intro";
// import Daily from "../Components/Daily";
import "./Bilingual.css";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import myImage from "../Assets/Images/Bilingual.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Environments } from "../environment";

function Bilingual() {
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("BinhDinh");
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleOnClickSearchValue = (item) => {
    // navigate(`/translation/${item.id}`);
    navigate("/searchresult", {
      state: { selectedItem: item, language: language },
    });
  };

  useEffect(() => {
    setSearchValue("");
  }, [language]);

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);

    axios
      .get(
        `${Environments.API_URL}/search?searched_word=${e.currentTarget.value}&language=${language}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Intro />
      <div style={{ width: "100vw" }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>
      <div className="search_text">
        <h1
          style={{ display: "block", marginBottom: "30px", marginTop: "20px" }}
        >
          Kho ngữ liệu song ngữ tiếng Ba-na
        </h1>
        <h3
          style={{
            display: "block",
            marginBottom: "50px",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Tra cứu tiếng Ba-na từ ba phương ngữ Bình Định, Kon Tum, Gia Lai
        </h3>
      </div>
      <div className="bilingual_container">
        <div className="search">
          <div
            style={{
              marginBottom: "50px",
              position: "relative",
              display: "flex",
              width: "600px",
            }}
          >
            <IconContext.Provider value={{ size: "20px" }}>
              <AiOutlineSearch className="search_icon" />
            </IconContext.Provider>
            <input
              type="text"
              placeholder="Tra cứu đơn ngữ bất kì"
              value={searchValue}
              onChange={handleSearch}
              style={{ width: "100%" }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)} // Delay hiding results
            />

            {showResults && data.length > 0 && searchValue.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  left: 0,
                  right: 0,
                  backgroundColor: "white",
                  zIndex: "100",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  height: 525,
                }}
              >
                {data.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="search-result-item"
                      style={{
                        padding: "10px",
                        borderBottom: "1px solid #e0e0e0",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onClick={() => handleOnClickSearchValue(item)}
                    >
                      {item.tiengViet}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="search_buttons">
            <button
              onClick={() => {
                setLanguage("BinhDinh");
              }}
              className="search_button"
              style={{
                background: language === "BinhDinh" ? "black" : "white",
                color: language === "BinhDinh" ? "white" : "black",
              }}
            >
              Bình Định
            </button>
            <button
              onClick={() => {
                setLanguage("GiaLai");
              }}
              className="search_button"
              style={{
                background: language === "GiaLai" ? "black" : "white",
                color: language === "GiaLai" ? "white" : "black",
              }}
            >
              Gia Lai
            </button>
            <button
              onClick={() => {
                setLanguage("KonTum");
              }}
              className="search_button"
              style={{
                background: language === "KonTum" ? "black" : "white",
                color: language === "KonTum" ? "white" : "black",
              }}
            >
              KonTum
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bilingual;
