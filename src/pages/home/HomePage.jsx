import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { categories } from "../../data/categories/categories";
import { products } from "../../data/products/products";

import { Autoplay } from "swiper/modules";

import "./homePage.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import { LanguageContext } from "../../App";

const HomePage = () => {
  const { languageObj: t } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadingDuration = 2000; // 2s

    setTimeout(() => {
      setLoading(true);
    }, loadingDuration);
  }, []);

  return (
    <Fragment>
      <div className={loading ? "ring-content none" : "ring-content"}>
        <div className="ring">
          Loading
          <span></span>
        </div>
      </div>
      <section id="category">
        <div className="container">
          <Tabs className="category-tabs">
            <TabList className="category-tablist">
              <Tab className="category-tab">
                <img src="/fire.svg" alt="" /> <p>{t.discount}</p>
              </Tab>
              {t.categories.map((category) => (
                <Tab className="category-tab" key={category.name}>
                  <img src={category.image} alt={category.name} />{" "}
                  <p>{category.name}</p>
                </Tab>
              ))}
            </TabList>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {/* <TabPanel> */}
                {products
                  .filter((product) => product.discount)
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          <h2 className="price"> {product.price}</h2>
                          <h2 className="dis-price">
                            {Math.round(
                              product.price * (1 - product.discount / 100)
                            )}{" "}
                            ₽
                          </h2>
                          {/* <h2 className="card-title">{product.name}</h2> */}
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
                {/* </TabPanel> */}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Пицца")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Суши")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Напитки")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Закуски")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Десерты")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Соусы")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
            <TabPanel className="category-tabpanel">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {products
                  .filter((product) => product.category === "Комбо")
                  .map((product, i) => (
                    <SwiperSlide key={i}>
                      <Tab className="category-card">
                        <div className="card-image">
                          <img src={product.image} />
                        </div>
                        <div className="card-prices">
                          {/* <h2 className="price"> ${product.price}</h2> */}
                          <h2 className="card-title">{product.name}</h2>
                        </div>
                      </Tab>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <section id="address">
        <div className="container">
          <div className="address-container">
            <h1>{t.check_address_title}</h1>
            <div className="input-group">
              <input type="text" placeholder="Адрес" />
              <button type="submit" className="send-btn">
                <img src="/send.png" alt="send" />
              </button>
              <button className="btn">{t.check}</button>
              <img
                className="location-img"
                src="/Location.svg"
                alt="Location"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="categories">
            {t.categories.map((category, i) => (
              <div key={i}>
                <div className="category-group">
                  <p className="category-name">{category.name}</p>
                  <div className="select">
                    <img
                      className="filter-img"
                      src="/filter.png"
                      alt="filter"
                    />
                    <select>
                      <option value="1">
                        <p>{t.filter}</p>
                      </option>
                    </select>
                  </div>
                </div>
                <div className="category-cards">
                  {t.products
                    .filter((product) => product.category === category.name)
                    .map((product, id) => (
                      <ProductCard {...product} key={id} />
                    ))}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </section>
      <section id="deliver">
        <div className="container-850">
          <div className="deliver-infos">
            <h1>{t.deliver_info}</h1>
            <p className="deliver-head__title">{t.deliver_head_title}</p>
            <h3>{t.order}</h3>
            <p className="deliver-last-title">{t.deliver_last_title}</p>
            <div className="overlay"></div>
          </div>
          <a href="Показать полностью">{t.more}</a>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
