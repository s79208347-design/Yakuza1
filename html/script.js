/*รีวิวจากลูกค้า*/

// Configuration Object สำหรับจัดการค่าต่างๆ แบบรวมศูนย์
const CONFIG = {
  SITE_URL: 'https://yakuzabet1.com/',
  LINE_URL: 'https://lin.ee/JpWODqE',
  UPDATE_INTERVALS: {
    REVIEWS: 5000,
    WITHDRAWS: 3000,
    ONLINE_COUNT: 5000,
    IMAGES: 10000
  },
  ONLINE_PLAYERS: {
    MIN: 10000,
    MAX: 50000,
    BASE_RANGE: 20000
  },
  REVIEW_SETTINGS: {
    DISPLAY_COUNT: 4,
    STAR_MIN: 4,
    STAR_MAX: 5
  },
  WITHDRAW_SETTINGS: {
    DISPLAY_COUNT: 4,
    AMOUNT_RANGES: {
      HUNDREDS: { min: 100, max: 900, weight: 0.1 },
      THOUSANDS: { min: 1000, max: 9900, weight: 0.5 },
      TEN_THOUSANDS: { min: 10000, max: 99000, weight: 0.4 }
    }
  }
};

const reviews = [
  {
    name: "สมใจ",
    img: "images/โปรไฟล์รีวิว/1.jpg",
    text: "เว็บนี้ถอนไวมาก ประทับใจสุดๆค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ณัฐวุฒิ",
    img: "images/โปรไฟล์รีวิว/2.jpg",
    text: "แอดมินบริการดีสุดๆ ตอบไวมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "กานต์",
    img: "images/โปรไฟล์รีวิว/3.jpg",
    text: "แนะนำเลยเว็บนี้ ใช้ง่าย ถอนไวค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "มานะ",
    img: "images/โปรไฟล์รีวิว/4.jpg",
    text: "ฝากถอนรวดเร็วมากครับ ไม่ต้องรอนาน",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "ปวีณ์นุช",
    img: "images/โปรไฟล์รีวิว/5.jpg",
    text: "เว็บนี้เชื่อถือได้จริงๆค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ธีรศักดิ์",
    img: "images/โปรไฟล์รีวิว/6.jpg",
    text: "แนะนำเลยครับ เว็บดีมาก",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "สุรีย์พร",
    img: "images/โปรไฟล์รีวิว/7.jpg",
    text: "แอดมินน่ารัก บริการดีมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "วรพล",
    img: "images/โปรไฟล์รีวิว/8.jpg",
    text: "เว็บนี้โปรเยอะมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "อรทัย",
    img: "images/โปรไฟล์รีวิว/9.jpg",
    text: "ฝากถอนง่าย ไม่ยุ่งยากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ศุภชัย",
    img: "images/โปรไฟล์รีวิว/10.jpg",
    text: "เล่นแล้วได้เงินจริงครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "สมชาย",
    img: "images/โปรไฟล์รีวิว/11.jpg",
    text: "เว็บนี้ปลอดภัยมากครับ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สุภาวดี",
    img: "images/โปรไฟล์รีวิว/12.jpg",
    text: "แอดมินตอบไวสุดๆค่ะ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "วราภรณ์",
    img: "images/โปรไฟล์รีวิว/13.jpg",
    text: "ถอนเงินไวมากค่ะ ไม่ต้องรอนาน",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ณัฐพล",
    img: "images/โปรไฟล์รีวิว/14.jpg",
    text: "เว็บนี้ดีจริงๆครับ ฝากถอนง่าย",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "อารีย์",
    img: "images/โปรไฟล์รีวิว/15.jpg",
    text: "เล่นง่าย ได้เงินไวค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "พงษ์ศักดิ์",
    img: "images/โปรไฟล์รีวิว/16.jpg",
    text: "บริการดีมากครับ แนะนำเลย",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "จิราภา",
    img: "images/โปรไฟล์รีวิว/17.jpg",
    text: "เว็บนี้ถอนไวจริงค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "กิตติ",
    img: "images/โปรไฟล์รีวิว/18.jpg",
    text: "ฝากถอนสะดวกมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "ศิริพร",
    img: "images/โปรไฟล์รีวิว/19.jpg",
    text: "แอดมินบริการดีมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ประเสริฐ",
    img: "images/โปรไฟล์รีวิว/20.jpg",
    text: "เว็บนี้เชื่อถือได้ครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "อัญชลี",
    img: "images/โปรไฟล์รีวิว/21.jpg",
    text: "ฝากถอนรวดเร็วมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สมบัติ",
    img: "images/โปรไฟล์รีวิว/22.jpg",
    text: "เว็บนี้ดีจริงครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "นฤมล",
    img: "images/โปรไฟล์รีวิว/23.jpg",
    text: "แอดมินน่ารักมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "วุฒิชัย",
    img: "images/โปรไฟล์รีวิว/24.jpg",
    text: "ถอนเงินไวมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "สุชาติ",
    img: "images/โปรไฟล์รีวิว/25.jpg",
    text: "เว็บนี้บริการดีมากครับ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "อรอนงค์",
    img: "images/โปรไฟล์รีวิว/26.jpg",
    text: "ฝากถอนง่ายมากค่ะ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "พิมพ์ใจ",
    img: "images/โปรไฟล์รีวิว/27.jpg",
    text: "เว็บนี้ถอนไวจริงค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สมพงษ์",
    img: "images/โปรไฟล์รีวิว/28.jpg",
    text: "แอดมินบริการดีมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "วาสนา",
    img: "images/โปรไฟล์รีวิว/29.jpg",
    text: "เว็บนี้ดีมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ประภาพร",
    img: "images/โปรไฟล์รีวิว/30.jpg",
    text: "ฝากถอนรวดเร็วค่ะ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "สุรชัย",
    img: "images/โปรไฟล์รีวิว/31.jpg",
    text: "เว็บนี้เชื่อถือได้ครับ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "อุทัย",
    img: "images/โปรไฟล์รีวิว/32.jpg",
    text: "ถอนเงินไวมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "จารุวรรณ",
    img: "images/โปรไฟล์รีวิว/33.jpg",
    text: "แอดมินบริการดีมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สมฤดี",
    img: "images/โปรไฟล์รีวิว/34.jpg",
    text: "เว็บนี้ดีมากค่ะ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "วราฤทธิ์",
    img: "images/โปรไฟล์รีวิว/35.jpg",
    text: "ฝากถอนง่ายมากครับ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สุรางค์",
    img: "images/โปรไฟล์รีวิว/36.jpg",
    text: "เว็บนี้ถอนไวจริงค่ะ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "อารีรัตน์",
    img: "images/โปรไฟล์รีวิว/37.jpg",
    text: "แอดมินน่ารักมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "สมศักดิ์",
    img: "images/โปรไฟล์รีวิว/38.jpg",
    text: "เว็บนี้ดีจริงครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "วรรณา",
    img: "images/โปรไฟล์รีวิว/39.jpg",
    text: "ฝากถอนรวดเร็วมากค่ะ",
    align: "left",
    bg: "#e0f7fa"
  },
  {
    name: "ประเสริฐศักดิ์",
    img: "images/โปรไฟล์รีวิว/40.jpg",
    text: "แอดมินบริการดีมากครับ",
    align: "right",
    bg: "#ffe0b2"
  },
  {
    name: "สุพัตรา",
    img: "images/โปรไฟล์รีวิว/41.jpg",
    text: "เว็บนี้ถอนไวจริงค่ะ",
    align: "left",
    bg: "#e0f7fa"
  }
];

const femaleNames = [
  "สมใจ","กานต์","ปวีณ์นุช","สุรีย์พร","อรทัย","สุภาวดี","วราภรณ์","อารีย์","จิราภา","ศิริพร",
  "อัญชลี","นฤมล","พิมพ์ใจ","วาสนา","ประภาพร","จารุวรรณ","สมฤดี","สุรางค์","อารีรัตน์","วรรณา","สุพัตรา"
];

function isFemaleImage(imgPath) {
  // สมมติว่าไฟล์ภาพเลขคี่เป็นผู้หญิง เลขคู่เป็นผู้ชาย
  // หรือจะเช็คจากชื่อใน femaleNames ก็ได้
  const match = imgPath.match(/\/(\d+)\.jpg$/);
  if (!match) return false;
  const num = parseInt(match[1], 10);
  // เลขคี่เป็นผู้หญิง
  return num % 2 === 1;
}

function getRandomFemaleName() {
  return femaleNames[Math.floor(Math.random() * femaleNames.length)];
}

function fixReviewNameForGender(r) {
  if (isFemaleImage(r.img)) {
    // ถ้าชื่อไม่อยู่ใน femaleNames ให้เปลี่ยนชื่อ
    if (!femaleNames.includes(r.name)) {
      return { ...r, name: getRandomFemaleName() };
    }
  }
  return r;
}


// สุ่มจำนวนดาว 4-5 ดวง และวันที่สุ่มย้อนหลังไม่เกิน 30 วัน
function getRandomStars() {
  try {
    const STAR_MIN = CONFIG.REVIEW_SETTINGS?.STAR_MIN || 4;
    const STAR_MAX = CONFIG.REVIEW_SETTINGS?.STAR_MAX || 5;
    const n = Math.random() < 0.7 ? STAR_MAX : STAR_MIN;
    return '★'.repeat(n) + (n === STAR_MIN ? '☆' : '');
  } catch (error) {
    console.error('Error in getRandomStars:', error);
    return '★★★★★'; // fallback
  }
}
function getRandomDate() {
  try {
    const d = new Date();
    return d.toLocaleDateString('th-TH', { year: '2-digit', month: 'short', day: 'numeric' });
  } catch (error) {
    console.error('Error in getRandomDate:', error);
    return '27 ก.ย. 68'; // fallback
  }
}

function renderReview(r) {
  r = fixReviewNameForGender(r);
  const stars = getRandomStars();
  const date = getRandomDate();
  const bubbleClass = r.align === "right" ? "review-bubble-right" : "review-bubble-left";
  const flexDir = r.align === "right" ? "row-reverse" : "row";
  const nameAlign = r.align === "right" ? "right" : "left";
  const nameMargin = r.align === "right" ? "margin-right:2px;" : "margin-left:2px;";
  const dateAlign = r.align === "right" ? "right" : "left";
  const dateMargin = r.align === "right" ? "margin-right:2px;" : "margin-left:8px;";
  return `
    <div class="review-anim" style="margin-bottom:5px;display:flex;align-items:flex-end;flex-direction:${flexDir};">
      <img class="review-avatar" src="${r.img}" alt="${r.name}" style="width:22px;height:22px;">
      <div class="review-content" style="font-size:0.78rem;">
        <div class="${bubbleClass}" style="padding:5px 8px; font-size:0.82rem;">
          <div class="review-stars" style="font-size:0.8rem;">${stars}</div>
          <div>${r.text}</div>
        </div>
        <div class="review-name" style="text-align:${nameAlign};${nameMargin};font-size:0.78rem;">- คุณ${r.name}</div>
  <div class="review-date" style="font-size:0.7rem;text-align:${dateAlign};${dateMargin}">${date}</div>
      </div>
    </div>
  `;
}

function getRandomReviews(arr, n = CONFIG.REVIEW_SETTINGS.DISPLAY_COUNT) {
  try {
    // สุ่ม n รายการจาก arr โดยไม่ซ้ำ
    const result = [];
    const taken = new Set();
    const maxAttempts = arr.length * 2; // ป้องกัน infinite loop
    let attempts = 0;
    
    while (result.length < n && taken.size < arr.length && attempts < maxAttempts) {
      const idx = Math.floor(Math.random() * arr.length);
      if (!taken.has(idx)) {
        result.push(arr[idx]);
        taken.add(idx);
      }
      attempts++;
    }
    return result;
  } catch (error) {
    console.error('Error in getRandomReviews:', error);
    return arr.slice(0, n); // fallback
  }
}

let currentReviews = getRandomReviews(reviews, CONFIG.REVIEW_SETTINGS.DISPLAY_COUNT);
let nextAlign = currentReviews[currentReviews.length - 1]?.align === "left" ? "right" : "left";

function renderAllReviews(arr) {
  return arr.map(renderReview).join('');
}


function showCurrentReviews() {
  try {
    const chatReviewEl = document.getElementById('chat-review');
    if (!chatReviewEl) {
      console.warn('chat-review element not found');
      return;
    }
    
    chatReviewEl.innerHTML = `
    <h2 style="text-align:center;color:#fefe0b;text-shadow:0 2px 16px #2f00ff,0 0 8px #fff,0 0 32px #0fc7eb;margin-bottom:28px;display:flex;align-items:center;justify-content:center;gap:8px;">
  <span style="display:inline-flex;align-items:center;margin-right:4px;">
        <svg class="review-star-spin" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 0 8px #ffd700cc);">
          <defs>
            <radialGradient id="starGradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbe6"/>
              <stop offset="80%" stop-color="#ffd700"/>
              <stop offset="100%" stop-color="#e53935"/>
            </radialGradient>
          </defs>
          <polygon points="14,2 17,10.5 26,11 19,17 21,26 14,21.5 7,26 9,17 2,11 11,10.5" fill="url(#starGradient2)" stroke="#bfa100" stroke-width="1.2"/>
        </svg>
      </span>
      รีวิวจากลูกค้า
  <span style="display:inline-flex;align-items:center;margin-left:4px;">
        <svg class="review-star-spin" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 0 8px #ffd700cc);transform:rotate(-15deg);">
          <defs>
            <radialGradient id="starGradient3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fffbe6"/>
              <stop offset="80%" stop-color="#ffd700"/>
              <stop offset="100%" stop-color="#e53935"/>
            </radialGradient>
          </defs>
          <polygon points="14,2 17,10.5 26,11 19,17 21,26 14,21.5 7,26 9,17 2,11 11,10.5" fill="url(#starGradient3)" stroke="#bfa100" stroke-width="1.2"/>
        </svg>
      </span>
    </h2>
    <div id="review-list">${renderAllReviews(currentReviews)}</div>
  `;
    // ใส่ animation
    document.querySelectorAll('.review-anim').forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px) scale(0.98)';
      setTimeout(() => {
        el.style.transition = 'all 0.7s cubic-bezier(.4,2,.3,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0) scale(1)';
      }, 100 + i * 120);
    });
  } catch (error) {
    console.error('Error in showCurrentReviews:', error);
  }
}

// เริ่มต้นเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
  try {
    showCurrentReviews();
    scheduleNextReviewUpdate();
  } catch (error) {
    console.error('Error initializing reviews:', error);
  }
});

// ใช้ setTimeout แทน setInterval เพื่อประสิทธิภาพที่ดีขึ้น
function scheduleNextReviewUpdate() {
  setTimeout(() => {
    try {
      // สุ่มรีวิวใหม่ที่ไม่ซ้ำกับรายการปัจจุบัน
      let candidates = reviews.filter(r => !currentReviews.includes(r));
      if (candidates.length === 0) candidates = reviews;
      let newReview = candidates[Math.floor(Math.random() * candidates.length)];
      
      // กำหนด align สลับซ้ายขวา
      newReview = { ...newReview, align: nextAlign };
      nextAlign = nextAlign === "left" ? "right" : "left";
      
      // ขยับรีวิวขึ้น 1 ตำแหน่ง แล้วเพิ่มรีวิวใหม่ด้านล่าง
      currentReviews = [...currentReviews.slice(1), newReview];
      showCurrentReviews();
      
      scheduleNextReviewUpdate(); // เรียกต่อเนื่อง
    } catch (error) {
      console.error('Error in review update:', error);
      scheduleNextReviewUpdate(); // พยายามต่อแม้มี error
    }
  }, CONFIG.UPDATE_INTERVALS.REVIEWS);
}

// scheduleNextReviewUpdate(); // ย้ายไปใน DOMContentLoaded แล้ว

// Lazy Loading สำหรับรูปภาพ
function initLazyLoading() {
  try {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // เพิ่ม lazy loading ให้รูปที่มี data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('lazy-load');
        imageObserver.observe(img);
      });
    }
  } catch (error) {
    console.error('Error initializing lazy loading:', error);
  }
}

// Performance monitoring
function initPerformanceMonitoring() {
  try {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perf = performance.getEntriesByType('navigation')[0];
          if (perf) {
            console.log('Page Load Performance:', {
              'DOM Content Loaded': Math.round(perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart),
              'Load Complete': Math.round(perf.loadEventEnd - perf.loadEventStart),
              'Total Load Time': Math.round(perf.loadEventEnd - perf.navigationStart)
            });
          }
        }, 0);
      });
    }
  } catch (error) {
    console.error('Error in performance monitoring:', error);
  }
}

// เริ่มต้น utilities
document.addEventListener('DOMContentLoaded', function() {
  initLazyLoading();
  initPerformanceMonitoring();
});

