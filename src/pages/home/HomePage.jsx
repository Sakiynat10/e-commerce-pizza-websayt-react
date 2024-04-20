import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { categories } from "../../data/categories/categories";
import { products } from "../../data/products/products";

import { Autoplay } from "swiper/modules";

import "./homePage.scss";

const HomePage = () => {
  return (
    <section id="category">
      <div className="container">
        <Tabs className="category-tabs">
          <TabList className="category-tablist">
            <Tab className="category-tab"><img src="/fire.svg" alt="" /> <p>Акции</p></Tab>
            {categories.map((category) => (
              <Tab className="category-tab" key={category.name}>
                <img src={category.image} alt={category.name} /> <p>{category.name}</p>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        {/* <h2 className="price"> ${product.price}</h2> */}
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
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
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
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
                        <h2 className="card-title">{
                            product.name
                          }
                        </h2>
                      </div>
                    </Tab>
                  </SwiperSlide>
                ))}
            </Swiper>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default HomePage;
