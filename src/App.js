/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import transfer from "./transfer.svg";
import logo from "./logos.png";
import sports from "./about-img.png";
import custumer from "./custumer.svg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function App() {
  AOS.init();
  return (
    <>
      <div className=" h-screen lg:py-0 scroll-smooth position-relative ">
        <button
          className="bottom-8 left-8 z-[99] text-lg p-2"
          style={{
            position: "fixed",
            border: "none",
            outline: "none",
            // backgroundColor: "red",
            // color: "white",
            // padding:"15px"
          }}
          data-aos="zoom-out"
          data-aos-delay="200"
          data-aos-duration="4000"
          // data-aos-offset="50"
        >
          <a href="https://wa.me/+916287349811?text=Hello,%20i%20want%20to%20join..">
            <div className="border bottom-1 p-1 rounded-3xl flex flex-row text-white bg-[#29A71A] hover:bg-opacity-85 hover:text-[#1] shadow-md hover:shadow-[#29A71A] hover:border-[#29A71A] ">
              <span class="md:[&>svg]:h-10 [&>svg]:h-8  md:[&>svg]:w-10 [&>svg]:w-8 [&>svg]:fill-white p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span>
              {/* <div className="font-bold mx-1 my-auto">Whatsapp me</div> */}
            </div>
          </a>
        </button>
        <div className='w-full flex h-screen  bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p5.jpg")]  '>
          <div className="m-2 md:mx-20 sm:m-15  w-[100%] my-auto ">
            <div className="bg-black opacity-95 rounded-lg pb-2">
              <div className=" ">
                <div className="flex justify-center items-center ">
                  <img
                    src={logo}
                    className="h-32 md:h-96 sm:h-72 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)] mt-2"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  />
                </div>

                {/* <div className='text-8xl font-bold basis-5/6 text-[#fcf7ea] font-serif mt-3'data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">Shambhu BetBook</div> */}
                <div
                  className="text-xl sm:text-2xl md:text-5xl font-bold text-[#fcf7ea] font-mono text-center md:mb-4 mb-2 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)]"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  INDIA'S BIGGEST BETTING SITE
                  {/* <p>shambhubetbook.com</p> */}
                </div>
                <div
                  className="flex justify-center items-center animate-bounce"
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                  data-aos-offset="50"
                >
                  <a href="https://wa.me/+916287349811?text=Hello,%20i%20want%20to%20join..">
                    <div className="transition ease-in-out bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 delay-150 hover:scale-110 hover:-translate-y-1 duration-300 hover:transition-all  text-white font-bold md:py-3 py-2 md:px-4 px-3 rounded md:text-xl text-base md:mt-3 mt-3 ">
                      <div className="font-bold mx-1 my-auto">Sign up Now</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:h-screen h-1/2 bg-[#FFFAB7]">
            <div className="md:p-6 p-2 my-auto">
              <div className="md:flex md:flex-row w-[100%] ">
                <img
                  src={sports}
                  className="sm:h-[30rem] h-56 w-auto md:basis-1/2 mx-auto"
                  data-aos="slide-down"
                  data-aos-offset="100"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                />
                <div
                  className="md:text-8xl text-center text-xl font-bold md:basis-1/2  text-[#C40C0C] font-serif md:mt-12 mt-4"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-delay="200"
                  data-aos-duration="2500"
                >
                  <u>All Sports</u>
                  <p className="md:text-4xl text-lg md:mt-3 mt-2">
                    Sport Betting
                  </p>
                  <p className="md:text-2xl text-base md:mt-3 mt-2">
                    All type of sports are available for the Betting and in
                    different category • Match odds • Bookmaker • Toss • fancy
                    Market • Different Sports with Different Categories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:h-screen h-1/2 bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p4.jpg")]'>
          <div className="md:flex md:flex-row w-[100%] bg-white opacity-85 md:p-6 p-2 my-auto">
            <img
              src={custumer}
              className="md:h-[30rem] h-56 w-auto md:basis-1/2 md:my-4 my-1  mx-auto"
              data-aos="slide-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1500"
            />
            <div
              className="md:text-6xl text-xl text-center font-bold md:basis-1/2 text-[#C40C0C] font-serif md:mt-12 mt-2 my-4 "
              data-aos="fade-up"
              data-aos-offset="250"
              data-aos-delay="1000"
              data-aos-duration="2500"
            >
              <u>Custumer Support</u>
              <p className="md:text-4xl text-lg md:mt-3 mt-1">24Hrs Service</p>
              <p className="md:text-2xl text-sm md:mt-3 mt-1 mb-2">
                We have 24Hrs customare care service for any quiery regarding
                the Betting and market. Call and whatsapp message service for
                the any tye of query regarding the betting and market services
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:h-screen h-1/2 bg-[#C40C0C]">
            <div className="md:p-4 p-2">
              <div className="md:flex md:flex-row w-[100%] ">
                <img
                  src={transfer}
                  className="md:h-[30rem] h-56 md:order-last  w-auto md:basis-1/2 mx-auto"
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                />
                <div
                  className="md:text-5xl text-xl text-center font-bold md:basis-1/2 text-[#FFC100] font-serif md:mt-12 mt-1"
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="1000"
                  data-aos-duration="2000"
                >
                  <u>Deposite & Withdraw</u>
                  <p className="md:text-2xl text-sm font-sans md:mt-3 mt-1">
                    We have 24 Hrs Deposit and Withdraw services with the
                    addition offers. We have 20Lacks transaction with the 100%
                    accuracy. We have multiple services for transaction like
                    online payment , it will depost in your account in 2min of
                    period with 100% accuracy. There is 100% Tax free money
                    Deposit in your account.
                  </p>
                  <button className=" transition ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 delay-150 hover:scale-110 hover:-translate-y-1 duration-300 hover:transition-all  text-white font-bold md:py-3 py-2 md:px-4 px-3 rounded md:text-xl text-base md:mt-3 mt-3 ">
                    Deposit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-auto bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p6.jpg")] '>
          <div className="md:flex md:flex-row md:items-stretch md:justify-between md:mx-32 mx-4 my-auto ">
            <div className="md:flex-1 m-6 ">
              <div>
                <img src={img2} className="w-[100%] h-[20rem]" />
              </div>
              <div className="bg-[#03AED2] p-2">
                <div className="text-4xl text-center text-white py-2">
                  Live Casino
                </div>
                <p className="text-lg text-wrap px-3 text-white">
                  Experience the thrill of Live Casino at any time, day or
                  night. Our Live Casino operates 24/7, giving you the freedom
                  to indulge in your favorite games whenever the mood strikes.
                </p>
              </div>
            </div>
            <div className="md:flex-1 m-6">
              
              <div className="bg-[#32012F] p-2">
                <div className="text-4xl text-center text-white py-2">
                Jackpot Games
                </div>
                <p className="text-lg text-wrap px-3 text-white">
                Take a spin, place your bets, and let the excitement of chasing jackpots unfold at 711batbook. Will you be the next big winner? The jackpot awaits, and the thrill of the chase is only a spin away!
                </p>
              </div>
              <div>
                <img src={img1} className="w-[100%] h-[20rem]" />
              </div>
            </div>
            <div className="md:flex-1 m-6">
              <div>
                <img src={img3} className="w-[100%] h-[20rem]" />
              </div>
              <div className="bg-[#0A6847] p-2">
                <div className="text-4xl text-center text-white py-2">
                Roulette
                </div>
                <p className="text-lg text-wrap px-3 text-white">
                Enjoy the excitement of Rouleete on the go with our mobile-compatible platform. Whether you're playing on a smartphone or tablet, our Roulette games are optimized for a seamless and responsive experience wherever you are.
                </p>
              </div>
            </div>
          </div>

          <div className=" m-0 p-0">
            <div className="h-2 bg-yellow-400 m-0 p-0"></div>
            <div className="h-full bg-[#101010] m-0 p-0">
              <div className="md:flex md:flex-row md:justify-between w-[100%] bg-[#101010]">
                <div className="md:basis-1/3 bg-white h-full md:order-2 p-5 my-auto">
                  <div className="text-orange-600 text-3xl font-semibold text-center m-3 ">
                    ABOUT US
                  </div>
                  <p className="text-wrap">
                    Welcome to ShambhuBetBook, your premier destination for an
                    unparalleled online betting experience. Immerse yourself in
                    a world of excitement and possibility, where cutting-edge
                    technology meets a vast array of betting options. Our
                    user-friendly platform provides a seamless and intuitive
                    interface, ensuring that both seasoned bettors and newcomers
                    can easily navigate and enjoy the thrill of online wagering.
                  </p>
                </div>
                <div className="md:basis-1/3 md:order-1 md:ms-14 m-2 h-auto">
                  <img
                    src={logo}
                    className="h-32 md:h-32 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)] mt-2 mx-auto"
                    data-aos="fade-right"
                    // data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  />
                  <div>
                    <div className="mx-8 text-white font-semibold text-lg text-center">
                      World's first betting site with 24Hrs Betting and Customer
                      Services Also 100% accuracy in Transaction.
                    </div>
                    <div className="mx-8 mt-4 text-white font-semibold text-base text-center">
                      © 2024 ShambhuBetBook.
                      <br />
                      Some rights reserved.
                      <p className="my-2">
                        by <a href="">shambhubetbook.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <hr class="md:hidden h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="md:basis-1/3 md:order-3 md:me-14 m-2">
                  <div className="text-2xl text-white text-center mt-4">
                    ADDRESS
                    <p className="text-lg font-serif text-center">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                  </div>
                  <div className="text-2xl text-white text-center mt-4">
                    PHONE
                    <p className="text-lg font-serif ">253232323232</p>
                  </div>
                  <div className="text-2xl text-white text-center mt-4">
                    EMAIL
                    <p className="text-lg font-serif">email@example.com</p>
                  </div>
                  <div className=" flex items-center justify-center">
                  <div className="flex my-4 ">
                    <a href="#">
                      <div className="rounded-full p-2 bg-white me-2">
                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="rounded-full p-2 bg-white me-2">
                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0088cc]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="rounded-full p-2 bg-white me-2">
                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
