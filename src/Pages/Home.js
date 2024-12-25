import "../Components/WordList";
import WordList from "../Components/WordList";
import Intro from "../Components/Intro";
import Daily from "../Components/Daily";
import myImage from "../Assets/Images/Bilingual.jpg";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
};

function Home() {
  return (
    <>
      <Intro />
      <div style={{ width: "100vw" }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>

      <div className="main">
        <Slider {...settings}>
          <div>
            <h1>Dân tộc Bahna</h1>
            <p style={{ lineHeight: 1.5 }}>
              Dân tộc Ba Na (Ba Na) là một trong những dân tộc thuộc ngữ hệ Môn
              – Khmer. Họ là dân tộc có số dân đông nhất trong những dân tộc nói
              tiếng Môn – Khmer miền Nam Trung Bộ. Người Ba Na cư trú ở các tỉnh
              Kon Tum, Gia Lai, Bình Định và Phú Yên với dân số khoảng 287.000
              người (Tổng cục thống kê, 2019). Tại Kon Tum, người Ba Na cư trú
              tập trung tại 15 làng ở các thị xã như Kon Hơ ngo, Kon Rơ Bang,
              Kon Rơ Pắt, Kon Rơ Hai, Kon Kơ Lo. Tại Gia Lai, người Ba Na tập
              trung tại Măng Giang, An Khê (Kơ Bang), Giang Trung, Giang Nam, Bơ
              Goong. Ở tỉnh Bình Định, người Ba Na cư trú tập trung tại các xã
              huyện Vĩnh Thạnh và một số xã thuộc huyện Vân Canh, An Lão và Hoài
              Ân. Và cũng có một bộ phận người Ba Na sống rải rác ở các huyện
              phía Tây tại Phú Yên. Về mặt dân tộc học, người Ba Na phân thành
              các nhánh Gơ la, Tơ-Lô, Giơ Lâng, Kon Kơ-đeh , Kơ Pơng Kông,
              Kriêm.
            </p>
            <p style={{ lineHeight: 1.5 }}>
              Người Ba Na tự gọi mình là Ba Na. Tộc danh này được một số nhà
              nghiên cứu trước đây đã gọi, như trong sách "Bộ lạc Ba Na ở Kon
              Tum" của P.Guilleminet, xuất bản bản năm 1952, trong cuốn "Mọi Kon
              Tum" của Nguyễn Kinh Chi và Nguyễn Đổng Chi, xuất bản năm 1937,
              gần đây tái bản với tên sách “Người Ba Na ở Kon Tum” năm 2011.
              Ngoài tên tự gọi Ba Na, người Ba Na còn tự gọi mình là Kon Kông
              (người ở núi) để phân biệt với Kon Doan (người kinh - người ở đồng
              bằng). Là dân tộc có dân số đông, lại cư trú trên địa bàn rộng
              lớn, người Ba Na bao gồm nhiều nhóm địa phương khác nhau có ít
              nhất 8 nhóm địa phương chính. Nhóm Tơ-Lô, nhóm Krum, nhóm Vân
              Canh, nhóm Thồ Lồ, 4 nhóm này sinh sống ở các tỉnh từ Phú Yên đến
              Bình định và Gia Lai.
            </p>
          </div>

          <div>
            <h1>Dân tộc Bahna 2</h1>
            <p style={{ lineHeight: 1.5 }}>
              Dân tộc Ba Na (Ba Na) là một trong những dân tộc thuộc ngữ hệ Môn
              – Khmer. Họ là dân tộc có số dân đông nhất trong những dân tộc nói
              tiếng Môn – Khmer miền Nam Trung Bộ. Người Ba Na cư trú ở các tỉnh
              Kon Tum, Gia Lai, Bình Định và Phú Yên với dân số khoảng 287.000
              người (Tổng cục thống kê, 2019). Tại Kon Tum, người Ba Na cư trú
              tập trung tại 15 làng ở các thị xã như Kon Hơ ngo, Kon Rơ Bang,
              Kon Rơ Pắt, Kon Rơ Hai, Kon Kơ Lo. Tại Gia Lai, người Ba Na tập
              trung tại Măng Giang, An Khê (Kơ Bang), Giang Trung, Giang Nam, Bơ
              Goong. Ở tỉnh Bình Định, người Ba Na cư trú tập trung tại các xã
              huyện Vĩnh Thạnh và một số xã thuộc huyện Vân Canh, An Lão và Hoài
              Ân. Và cũng có một bộ phận người Ba Na sống rải rác ở các huyện
              phía Tây tại Phú Yên. Về mặt dân tộc học, người Ba Na phân thành
              các nhánh Gơ la, Tơ-Lô, Giơ Lâng, Kon Kơ-đeh , Kơ Pơng Kông,
              Kriêm.
            </p>
            <p style={{ lineHeight: 1.5 }}>
              Người Ba Na tự gọi mình là Ba Na. Tộc danh này được một số nhà
              nghiên cứu trước đây đã gọi, như trong sách "Bộ lạc Ba Na ở Kon
              Tum" của P.Guilleminet, xuất bản bản năm 1952, trong cuốn "Mọi Kon
              Tum" của Nguyễn Kinh Chi và Nguyễn Đổng Chi, xuất bản năm 1937,
              gần đây tái bản với tên sách “Người Ba Na ở Kon Tum” năm 2011.
              Ngoài tên tự gọi Ba Na, người Ba Na còn tự gọi mình là Kon Kông
              (người ở núi) để phân biệt với Kon Doan (người kinh - người ở đồng
              bằng). Là dân tộc có dân số đông, lại cư trú trên địa bàn rộng
              lớn, người Ba Na bao gồm nhiều nhóm địa phương khác nhau có ít
              nhất 8 nhóm địa phương chính. Nhóm Tơ-Lô, nhóm Krum, nhóm Vân
              Canh, nhóm Thồ Lồ, 4 nhóm này sinh sống ở các tỉnh từ Phú Yên đến
              Bình định và Gia Lai.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Home;
