import React, {useEffect, useState} from "react";
import Row from "./Row";
import Product from "../Products/Product";
import {
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from "@mui/icons-material";
import "./Home.css";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Prcha/HSS/Nov/5300-Kitchen---HSS---Hero---November_3000X1200._CB540631341_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/dec/19/boAt-PC-3000x1200-Prime-Members._CB540897242_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/13Tomorrow/_DesktopTallHero_3000x1200._CB540886012_.jpg",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleLeftClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1,
    );
  };

  const handleRightClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1,
    );
  };

  // IFFE to auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className='home'>
        <div className='home__container'>
          <div className='header__slider__container'>
            <ArrowCircleLeftOutlined
              className='header__slider__left'
              onClick={handleLeftClick}
              fontSize='large'
            />
            <img
              className='home__image'
              src={images[currentImage]}
              alt='Home_Image'
            />
            <ArrowCircleRightOutlined
              className='header__slider__right'
              onClick={handleRightClick}
              fontSize='large'
            />
          </div>

          <Row style={{marginTop: "-25%"}}>
            <Product
              id='1'
              title='2022 Apple MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 512GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera; Space Grey ​​​​​​​'
              price={100}
              image='https://m.media-amazon.com/images/I/61L5QgPvgqL._SX679_.jpg'
              rating={5}
            />
            <Product
              id='2'
              title='2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD.'
              price={200}
              image='https://m.media-amazon.com/images/I/719C6bJv8jL._SL1500_.jpg'
              rating={4}
            />
          </Row>
          <Row
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Product
              id='3'
              title='Kellogg s Muesli Nuts Delight 1000G | 12-In-1 Power Breakfast | Indias No. 1 Muesli | Multigrain Breakfast Cereal|Almond'
              price={300}
              image='https://m.media-amazon.com/images/I/51H6-+UzuFL._SY300_SX300_.jpg'
              rating={4}
            />
            <Product
              id='4'
              title='Wildcraft Spyder Laptop Backpack 30 L'
              price={400}
              image='https://m.media-amazon.com/images/I/51BfGBBdAdL._SY879_.jpg'
              rating={5}
            />
            <Product
              id='5'
              title='Samsung Galaxy S23 Ultra 5G AI Smartphone (Cream, 12GB, 256GB Storage)'
              price={500}
              image='https://m.media-amazon.com/images/I/71OXmy3NMCL._SX679_.jpg'
              rating={5}
            />
          </Row>
          <Row
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Product
              id='6'
              title='iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium'
              price={800}
              image='https://m.media-amazon.com/images/I/3164xgZ11EL._SY445_SX342_QL70_FMwebp_.jpg'
              rating={5}
            />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
