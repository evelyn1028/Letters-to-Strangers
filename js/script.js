const carouselImages = document.getElementById("carousel-images");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const imageCount = 50; // 이미지 총 개수
const imageWidth = 280 + 20; // 이미지 가로 길이 + 여백

// 이미지 10개 동적 생성 (예시로 좌표 추가)
const mailboxLocations = [
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74329, lng: -73.99184 }, 
  { lat: 40.74328, lng: -73.99185 }, 
  { lat: 40.74319, lng: -73.99190 }, 
  { lat: 40.74362, lng: -73.99210 }, 
  { lat: 40.74365, lng: -73.99121 }, 
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74329, lng: -73.99184 }, 
  { lat: 40.74328, lng: -73.99185 }, 
  { lat: 40.74319, lng: -73.99190 }, 
  { lat: 40.74362, lng: -73.99210 }, 
  { lat: 40.74365, lng: -73.99121 },
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74329, lng: -73.99184 }, 
  { lat: 40.74328, lng: -73.99185 }, 
  { lat: 40.74319, lng: -73.99190 }, 
  { lat: 40.74362, lng: -73.99210 }, 
  { lat: 40.74365, lng: -73.99121 }, 
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74329, lng: -73.99184 }, 
  { lat: 40.74328, lng: -73.99185 }, 
  { lat: 40.74319, lng: -73.99190 }, 
  { lat: 40.74362, lng: -73.99210 }, 
  { lat: 40.74365, lng: -73.99121 },
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74317, lng: -73.99134 }, 
  { lat: 40.74316, lng: -73.99138 }, 
  { lat: 40.74329, lng: -73.99184 }, 
  { lat: 40.74328, lng: -73.99185 }, 
  { lat: 40.74319, lng: -73.99190 }, 
  { lat: 40.74362, lng: -73.99210 }, 
  { lat: 40.74365, lng: -73.99121 },
  { lat: 40.73611, lng: -73.992111 },
  { lat: 40.74299, lng: -73.99257 }, 
  { lat: 40.74317, lng: -73.99134 }, 
];

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `./images/Mailbox/mailbox${i}.JPG`; // 이미지 파일 이름이 mailbox1.jpg, mailbox2.jpg 등의 형식으로 생성
  carouselImages.appendChild(img);

  // 이미지 클릭 시 해당 메일박스 위치의 구글 맵 링크로 이동
  img.addEventListener("click", () => {
    const location = mailboxLocations[i - 1];
    const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
    window.open(googleMapsUrl, "_blank");
  });

  carouselImages.appendChild(img);
}

// 이미지 이동 로직
nextBtn.addEventListener("click", () => {
  if (currentIndex < imageCount - 1) {
    currentIndex++;
    carouselImages.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselImages.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});
