/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import transfer from "./transfer.svg";
import logo from "./logos.png";
import sports from "./sports.svg";
import custumer from "./custumer.svg";

function App() {
  AOS.init();
  return (
    <>
      <div className='w-full flex h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p5.jpg")]  '>
        <div className="m-2 md:m-20 sm:m-15  w-[100%] my-auto ">
          <div className="backdrop-blur-[10px]">
            <div className=" ">
              <div className="flex justify-center items-center ">
                <img
                  src={logo}
                  className="h-32 md:h-96 sm:h-52 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)]"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                />
              </div>

                {/* <div className='text-8xl font-bold basis-5/6 text-[#fcf7ea] font-serif mt-3'data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">Shambhu BetBook</div> */}
                <div
                  className="text-xl sm:text-2xl md:text-5xl font-bold text-[#fcf7ea] font-mono text-center mb-2 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)]"
                  data-aos="fade-left"
                  data-aos-delay="1050"
                  data-aos-duration="500"
                >
                  INDIA'S BIGGEST BETTING SITE
                  {/* <p>shambhubetbook.com</p> */}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-screen bg-[#FF6500]">
          <div className="md:p-6 p-2 my-auto">
            <div className="md:flex md:flex-row w-[100%] ">
              <img
                src={sports}
                className="sm:h-96 h-20 w-auto md:basis-1/2 mx-auto"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <div
                className="md:text-8xl text-center text-xl font-bold md:basis-1/2  text-[#C40C0C] font-serif md:mt-12 mt-4"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="1000"
                data-aos-duration="2500"
              >
                <u>All Sports</u>
                <p className="md:text-4xl text-lg md:mt-3 mt-2">Sport Betting</p>
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
      <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p4.jpg")]'>
        <div className="md:flex md:flex-row w-[100%] bg-white opacity-85 md:p-6 p-2 my-auto" >
      <img
                src={custumer}
                className="md:h-96 h-20 w-auto md:basis-1/2 md:my-4 my-1  mx-auto"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
          />
          <div
                className="md:text-6xl text-xl text-center font-bold md:basis-1/2 text-[#C40C0C] font-serif md:mt-12 mt-2 my-4 "
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="2500"
              >
                <u>Custumer Support</u>
                <p className="md:text-4xl text-lg md:mt-3 mt-1">24Hrs Service</p>
                <p className="md:text-2xl text-sm md:mt-3 mt-1 mb-2">
                We have 24Hrs customare care service for any quiery regarding the Betting and market. Call and whatsapp message service for the any tye of query regarding the betting and market services
                </p>
              </div>
          
        </div>
      </div>
      <div>
        <div className="h-screen bg-[#C40C0C]">
          <div className="md:p-6 p-2">
            <div className="md:flex md:flex-row w-[100%] ">
            <img
                src={transfer}
                className="md:h-96 h-20 md:order-last  w-auto md:basis-1/2 mx-auto"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <div
                className="md:text-5xl text-xl text-center font-bold md:basis-1/2 text-[#FFC100] font-serif md:mt-12 mt-4"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="2000"
              >
                <u>Deposite & Withdraw</u>
                <p className="md:text-2xl text-sm font-sans md:mt-3 mt-1">
                  We have 24 Hrs Deposit and Withdraw services with the addition
                  offers. We have 20Lacks transaction with the 100% accuracy. We
                  have multiple services for transaction like online payment ,
                  it will depost in your account in 2min of period with 100%
                  accuracy. There is 100% Tax free money Deposit in your
                  account.
                </p>
                <button className=" transition ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 delay-150 hover:scale-110 hover:-translate-y-1 duration-300 hover:transition-all  text-white font-bold md:py-3 py-2 md:px-4 px-3 rounded md:text-xl text-base md:mt-3 mt-3 ">
                  Deposit Now
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p6.jpg")]'></div>
      <div className="h-screen bg-pink-200 "></div>
    </>
  );
}

export default App;
