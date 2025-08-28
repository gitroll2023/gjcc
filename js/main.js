// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 팝업 알림 기능 =====
    const popWrap = document.getElementById('pop_wrap');
    const btnOpenPopup = document.getElementById('btn_open_popup');
    const btnClosePopup = document.getElementById('btn_close_popup');
    const btnCookiePopup = document.getElementById('btn_cookie_popup');

    if (btnOpenPopup) {
        btnOpenPopup.addEventListener('click', function(e) {
            e.preventDefault();
            if (popWrap) {
                popWrap.style.display = 'flex';
            }
        });
    }

    if (btnClosePopup) {
        btnClosePopup.addEventListener('click', function() {
            if (popWrap) {
                popWrap.style.display = 'none';
            }
        });
    }

    if (btnCookiePopup) {
        btnCookiePopup.addEventListener('click', function() {
            // 쿠키 설정 (24시간)
            setCookie('hidePopup', '1', 1);
            if (popWrap) {
                popWrap.style.display = 'none';
            }
        });
    }

    // 쿠키 확인
    if (!getCookie('hidePopup')) {
        // 팝업 자동 표시 (원하는 경우 활성화)
        // if (popWrap) popWrap.style.display = 'flex';
    }

    // ===== 헤더 스크롤 효과 =====
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }

        lastScrollTop = scrollTop;
    });

    // ===== 네비게이션 드롭다운 =====
    const gnbItems = document.querySelectorAll('.gnb_1dli');
    const allCate = document.getElementById('all_cate');
    let hoverTimeout;

    gnbItems.forEach(item => {
        const dropdown = item.querySelector('.cate_2dul');
        
        item.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            if (dropdown) {
                dropdown.style.display = 'block';
                if (allCate) {
                    allCate.style.display = 'block';
                    allCate.style.height = getMaxDropdownHeight() + 'px';
                }
            }
        });

        item.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                if (dropdown) {
                    dropdown.style.display = 'none';
                }
                if (allCate) {
                    allCate.style.display = 'none';
                    allCate.style.height = '0px';
                }
            }, 100);
        });
    });

    function getMaxDropdownHeight() {
        let maxHeight = 0;
        document.querySelectorAll('.cate_2dul').forEach(dropdown => {
            if (dropdown.style.display === 'block') {
                const height = dropdown.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            }
        });
        return maxHeight + 20;
    }

    // 3depth 메뉴 토글
    const gnbSubs = document.querySelectorAll('.gnb_sub');
    gnbSubs.forEach(sub => {
        sub.addEventListener('click', function(e) {
            e.preventDefault();
            const subMenu = this.nextElementSibling;
            if (subMenu && subMenu.classList.contains('gnb_3dli')) {
                if (subMenu.style.display === 'block') {
                    subMenu.style.display = 'none';
                } else {
                    subMenu.style.display = 'block';
                }
            }
        });
    });

    // ===== 모바일 메뉴 =====
    const gnbOpen = document.getElementById('gnb_open');
    const gnb2 = document.getElementById('gnb2');
    const btnClose = gnb2 ? gnb2.querySelector('.btn_close') : null;

    if (gnbOpen) {
        gnbOpen.addEventListener('click', function() {
            if (gnb2) {
                gnb2.classList.add('active');
            }
        });
    }

    if (btnClose) {
        btnClose.addEventListener('click', function() {
            if (gnb2) {
                gnb2.classList.remove('active');
            }
        });
    }

    // ===== 검색 토글 =====
    const schBtn = document.querySelector('.sch_btn');
    const hdSch = document.getElementById('hd_sch');

    if (schBtn && hdSch) {
        schBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (hdSch.style.display === 'block') {
                hdSch.style.display = 'none';
            } else {
                hdSch.style.display = 'block';
            }
        });
    }

    // ===== 메인 비주얼 슬라이더 =====
    if (typeof Swiper !== 'undefined') {
        // 메인 슬라이더
        const mainSwiper = new Swiper('.mainSwiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.mainSwiper .swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                }
            },
            speed: 800,
        });

        // 팝업 슬라이더
        const popupSwiper = new Swiper('.popupSwiper', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.popupSwiper .swiper-button-next',
                prevEl: '.popupSwiper .swiper-button-prev',
            },
            pagination: {
                el: '.popupSwiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });

        // 비디오 슬라이더
        const videoSwiper = new Swiper('.videoSwiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.videoSwiper .swiper-button-next',
                prevEl: '.videoSwiper .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        // 시설 슬라이더
        const facilitySwiper = new Swiper('.facilitySwiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.facilitySwiper .swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        // 파트너 슬라이더
        const partnerSwiper = new Swiper('.partnerSwiper', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.partnerSwiper .swiper-button-next',
                prevEl: '.partnerSwiper .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                },
            },
        });
    }

    // ===== 탭 메뉴 기능 =====
    const tabButtons = document.querySelectorAll('.bd_tab li');
    const tabContents = document.querySelectorAll('.tab_content .lt');

    tabButtons.forEach((tab, index) => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모든 탭 비활성화
            tabButtons.forEach(t => t.classList.remove('on'));
            tabContents.forEach(content => {
                content.classList.remove('on');
                content.style.display = 'none';
            });
            
            // 클릭한 탭 활성화
            this.classList.add('on');
            if (tabContents[index]) {
                tabContents[index].classList.add('on');
                tabContents[index].style.display = 'block';
            }
        });
    });

    // 첫 번째 탭 기본 활성화
    if (tabContents.length > 0) {
        tabContents[0].style.display = 'block';
    }

    // ===== Family Site 토글 =====
    const familyBtn = document.querySelector('.family_btn');
    const familyList = document.querySelector('.family_list');

    if (familyBtn && familyList) {
        familyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (familyList.style.display === 'block') {
                familyList.style.display = 'none';
            } else {
                familyList.style.display = 'block';
            }
        });

        // 외부 클릭시 닫기
        document.addEventListener('click', function() {
            if (familyList) {
                familyList.style.display = 'none';
            }
        });
    }

    // ===== 패럴랙스 효과 =====
    function parallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.swiper-slide');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.backgroundPosition = `center ${yPos}px`;
        });
    }

    window.addEventListener('scroll', parallax);

    // ===== 스크롤 애니메이션 =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll('.mtit, .quick_item, .sns_item, .video_item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });

    // ===== 비디오 재생 기능 =====
    const videoItems = document.querySelectorAll('.video_item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const thumb = this.querySelector('.thumb img');
            if (thumb && thumb.src.includes('youtube.com')) {
                const videoId = thumb.src.match(/\/vi\/([^\/]+)/)[1];
                if (videoId) {
                    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                }
            }
        });
    });

});

// ===== 쿠키 관련 함수 =====
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}