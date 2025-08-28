import MainVisual from './components/home/MainVisual';
import MainMenu from './components/home/MainMenu';
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
      
      {/* 주요 메뉴 섹션 */}
      <MainMenu />
      
      {/* 홍보영상 섹션 */}
      <VideoSection />
      
      {/* 시설안내 섹션 */}
      <FacilitySection />
      
      {/* 유관기관 섹션 */}
      <PartnerSection />
    </>
  );
}