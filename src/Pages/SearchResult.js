import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer"; // Assuming you have a Footer component
import myImage from "../Assets/Images/Bilingual.jpg";
import "./SearchResult.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Environments } from "../environment";

function useDebounce(cb, delay) {
  const [debounceValue, setDebounceValue] = useState(cb);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);
  return debounceValue;
}

function SearchResult() {
  const location = useLocation();
  const { selectedItem, language } = location.state || {};
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedWords, setRelatedWords] = useState([]);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(selectedItem.tiengViet ?? "");
  const [currentWord, setCurrentWord] = useState(selectedItem);

  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debounceValue === "") {
      setRelatedItems([]);
      return;
    }

    axios
      .get(
        `${Environments.API_URL}/search?searched_word=${debounceValue}&language=${language}`
      )
      .then((response) => {
        setRelatedWords(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `${Environments.API_URL}/related?searched_word=${debounceValue}&language=${language}`
      )
      .then((response) => {
        setRelatedItems(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [debounceValue]);

  const handleOnClickSearchValue = (item) => {
    // navigate(`/translation/${item.id}`);
    navigate("/searchcau", {
      state: { selectedItem: item, language: language },
    });
  };

  useEffect(() => {
    axios
      .get(
        `${Environments.API_URL}/search?searched_word=${selectedItem.tiengViet}&language=${language}`
      )
      .then((response) => {
        setRelatedWords(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    }
  }, [selectedItem, language]);

  return (
    <>
      <Intro />
      <div style={{ width: "100vw" }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>
      <div className="main">
        <h1 style={{ marginTop: "40px" }}>Kết quả tra cứu từ</h1>

        {selectedItem ? (
          <div className="result-container">
            <div className="result-column-left">
              <input
                style={{ padding: "8px 16px", width: "80%" }}
                type="text"
                placeholder="Tìm kiếm từ khác"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              {relatedWords.length > 0 &&
                relatedWords.map((word, index) => (
                  <div
                    style={{ padding: "8px 16px", cursor: "pointer" }}
                    className="related-word"
                    key={word.id}
                    onClick={() => {
                      setSearchValue(word.tiengViet);
                      setCurrentWord(word);
                    }}
                  >
                    {word.tiengViet}
                  </div>
                ))}
            </div>
            <div className="result-column-right">
              <p style={{ borderBottom: "1px solid #000" }}>
                Phép dịch{" "}
                <span style={{ fontWeight: "bold" }}>"{debounceValue}"</span>{" "}
                thành Bana ({language})
              </p>
              <br />
              <p>Tiếng Việt</p>
              <p
                style={{
                  fontWeight: "bold",
                  borderBottom: "dotted 1px  #000 ",
                }}
              >
                {currentWord.tiengViet}
              </p>
              <p>TỪ ĐIỂN TIẾNG VIỆT - BANA</p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {currentWord.tiengBana}
                </span>
              </p>{" "}
              {/* Assuming selectedItem has a bahna property */}
              <p style={{ borderBottom: "1px solid #000" }}>
                Các câu ({language}) có chứa từ{" "}
                <span style={{ fontWeight: "bold" }}>"{debounceValue}"</span>
              </p>
              {relatedItems.length > 0 ? (
                <div className="related-items">
                  {relatedItems.map((item) => (
                    <div
                      key={item.id}
                      className="related-item"
                      style={{
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onClick={() => handleOnClickSearchValue(item)}
                    >
                      <p style={{ borderBottom: "dotted 1px  #000 " }}>
                        {item.tiengViet}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No related items found</p>
              )}
            </div>
          </div>
        ) : (
          <p>No item selected</p>
        )}
      </div>
    </>
  );
}

export default SearchResult;
