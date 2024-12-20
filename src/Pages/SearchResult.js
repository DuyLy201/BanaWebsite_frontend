import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Intro from "../Components/Intro";
import Footer from "../Components/Footer"; // Assuming you have a Footer component
import myImage from "../Assets/Images/Bilingual.jpg";
import './SearchResult.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchResult() {
  const location = useLocation();
  const { selectedItem, language } = location.state || {};
  const [relatedItems, setRelatedItems] = useState([]);
  const navigate = useNavigate();

  const handleOnClickSearchValue = (item) => {
    // navigate(`/translation/${item.id}`);
    navigate('/searchcau', { state: { selectedItem: item, language: language} });
  };

  useEffect(() => {
    if (selectedItem) {
      // Make an API call to fetch related items based on selectedItem.tiengViet
      axios
        .get(`http://127.0.0.1:5000/api/related?searched_word=${selectedItem.tiengViet}&language=${language}`)
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
      <div style={{ width: '100vw' }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>
      <div className='main'>
        <h1 style={{marginTop:"40px"}}>Kết quả tra cứu từ</h1>
        {selectedItem ? (
          <div className="result-container">
            <div className="result-column-left">
            <p style={{ borderBottom: "1px solid #000" }}>Các câu ({language}) có chứa từ <span style={{ fontWeight: 'bold' }}>"{selectedItem.tiengViet}"</span></p>
        {relatedItems.length > 0 ? (
          <div className="related-items">
            {relatedItems.map((item) => (
              <div key={item.id} className="related-item" style={{cursor: 'pointer', transition: 'background-color 0.3s ease'}} onClick={() => handleOnClickSearchValue(item)}>
                <p style={{borderBottom:"dotted 1px  #000 "}}>{item.tiengViet}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No related items found</p>
        )}
            </div>
            <div className="result-column-right">
              <p style={{ borderBottom: "1px solid #000" }}>Phép dịch <span style={{ fontWeight: 'bold' }}>"{selectedItem.tiengViet}"</span> thành Bana ({language})</p>
              <br/>
              <p>Tiếng Việt</p>
              <p style={{fontWeight:"bold", borderBottom:"dotted 1px  #000 "}}>{selectedItem.tiengViet}</p>
              <p>TỪ ĐIỂN TIẾNG VIỆT - BANA</p>
              <p><span style={{ fontWeight: 'bold' }}>{selectedItem.tiengBana}</span></p> {/* Assuming selectedItem has a bahna property */}
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