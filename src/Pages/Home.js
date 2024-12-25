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
            <h1>Tiếng Bana</h1>
            <p style={{ lineHeight: 1.5 }}>
            Tiếng Ba Na là một trong những ngôn ngữ của cư dân có số dân tương đối đông, có
            vị trí như ngôn ngữ phổ thông ở vùng Tây Nguyên. Tiếng Ba Na cũng là đại diện
            cho nhóm ngôn ngữ Ba Na thuộc dòng Môn Khơ me phân bố ở khắp vùng trung và
            nam Đông Dương. Do tầm quan trọng như vậy, ngôn ngữ Ba Na từ lâu được giới
            chuyên môn quan tâm nghiên cứu. Chữ viết Ba Na đã được các giáo sĩ người Pháp
            thuộc Hội truyền giáo Kon Tum xây dựng từ năm 1849. Đến năm 1861 đã chữ viết
            này được dùng để dịch Kinh Thánh, giảng đạo. Từ điển Ba Na Pháp (Dictionnaire
            Ba Na– Francais) của P. Dourisboure được xuất bản từ năm 1889 [6]. Trong thế kỉ
            XX, nhiều công trình nghiên cứu tiếng Ba Na của người Pháp và người Mĩ được tiến
            hành. Một số công trình miêu tả tiếng Ba Na đã được công bố. Năm 1959, các từ
            điển đối dịch Ba Na tiếp tục được xuất bản, trong đó đáng chú ý là từ điển
            Dictionnaire Ba Na Francais do P. Guilleminet và R.P. Jules Alberty biên soạn, xuất
            bản ở Paris (Guilleminet, 1959).
            </p>
            <p style={{ lineHeight: 1.5 }}>
            Về mặt ngôn ngữ, tiếng Ba Na là một ngôn ngữ thuộc ngữ hệ Nam Á, ngữ chi Ba
            Na, nhóm Ba Na Bắc. Các ngôn ngữ cùng nhóm với tiếng Ba Na là tiếng Tampuon
            ở Campuchia và tiếng Alak ở Lào (Sidwell, 2002).
            </p>
            <p style={{ lineHeight: 1.5 }}>
            Các phương ngữ chính tiếng Ba Na gồm: Ba Na Kon Tum, Ba Na An Khê, và Ba Na
            Tơ lo, Ba Na Kon Kơ Đeh, Ba Na Kriêm; giữa các phương ngữ trên, tìm thấy sự
            khác biệt rõ rệt giữa Ba Na Kon tum, Ba Na Gia lai (An Khê) và Ba Na Bình Định
            (Ba Na Kriêm). Về cơ bản, giữa các phương ngữ thống nhất hệ thống âm vị, ngữ
            pháp. Tuy nhiên, do quá trình biến đổi lịch sử, do tiếp xúc với các ngôn ngữ lân cận
            như tiếng Cơ Ho, tiếng Mnông, tiếng Ba Na ở mỗi vùng phương ngữ có sự khác biệt
            về cách phát âm, và một số khác biệt về từ vựng.
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Home;
