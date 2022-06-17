# Barber Shop

Users:
- username: qweqwe password: qweqwe

გამოყენებული პაკეტები:
- react-simple-image-slider front.js-ში
- react-router-dom როუტინგისთვის
- react-icons/vsc აიკონებისთვის

რა აკლია პროექტს:
- backend-ი
- ბარბერისთვის review-ს პატარა ფანჯარა //პატარა pop-up ფანჯარასავით
  - სადაც მიმოხილვის დატოვება ან წაკითხვა იქნებოდა შესაძლებელი
- ბარბერთან ჯავშანის დადება
- react guard-ი endpoint-ების დასამალად
- ვალიდაციები ავტორიზაციაზე და რეგისტრაციაზე

Notes:  
- იუზერების და ბარბერების პირდაპირ კოდში წერია
  - იუზერების არის auth.js-ში
  - ბარბერების db.js-ში
  - signup-ით შექმნილი მომხმარებელი/ბარბერი ინახება localStorage-ში
    - მაგრამ refresh-ის შემდეგ იშლება
      - `window.location.reload(false);` login.js:15

ცოტა offtopic:
- Dockerfile
  - დასაბილდად docker build -t barbershop:1.0 .
  - გასაშვებად docker run -d -p 3000:3000 barbershop:1.0