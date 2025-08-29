import MainVisual from './components/home/MainVisual';
import NoticeSection from './components/home/NoticeSection';
import VideoSection from './components/home/VideoSection';
import FacilitySection from './components/home/FacilitySection';
import PartnerSection from './components/home/PartnerSection';
import PopupModal from './components/home/PopupModal';

export default function Home() {
  return (
    <>
      {/* 팝업 모달 */}
      <PopupModal />
      
      {/* 메인 비주얼 */}
      <MainVisual />
      
      {/* 공지사항 섹션 */}
      <NoticeSection />
      
      {/* 홍보영상 섹션 */}
      <VideoSection />
      
      {/* 시설안내 섹션 */}
      <FacilitySection />
      
      {/* 유관기관 섹션 */}
      <PartnerSection />
    </>
  );
}