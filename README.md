# Barber Shop

Users:
- username: qweqwe password: qweqwe

გამოყენებული პაკეტები:
- react-simple-image-slider front.js-ში
- react-router-dom როუტინგისთვის
- react-icons/vsc აიკონებისთვის
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