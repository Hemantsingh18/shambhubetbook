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
        <div className="m-20  w-[100%] ">
          <div className="backdrop-blur-[10px]">
            <div className="flex justify-center items-center ">
              <div>
                <img
                  src={logo}
                  className="h-96 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)]"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                />
                {/* <div className='text-8xl font-bold basis-5/6 text-[#fcf7ea] font-serif mt-3'data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">Shambhu BetBook</div> */}
                <div
                  className="text-5xl font-bold text-[#fcf7ea] font-mono text-center mb-2 filter drop-shadow-[10px_10px_15px_rgba(255,200,80,0.5)]"
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
      </div>
      <div>
        <div className="h-screen bg-[#FF6500]">
          <div className="p-6">
            <div className="flex flex-row w-[100%] ">
              <img
                src={sports}
                className="h-96 h-sm-32 w-auto basis-1/2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <div
                className="text-8xl font-bold basis-1/2 text-[#C40C0C] font-serif mt-12 "
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="2500"
              >
                <u>All Sports</u>
                <p className="text-4xl mt-3">Sport Betting</p>
                <p className="text-2xl mt-3">
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
        <div className="flex flex-row w-[100%] bg-white opacity-85">
      <img
                src={custumer}
                className="h-96 h-sm-32 w-auto basis-1/2 my-4"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
          />
          <div
                className="text-6xl font-bold basis-1/2 text-[#C40C0C] font-serif mt-12 my-4 "
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="2500"
              >
                <u>Custumer Support</u>
                <p className="text-4xl mt-3">24Hrs Service</p>
                <p className="text-2xl mt-3">
                We have 24Hrs customare care service for any quiery regarding the Betting and market. Call and whatsapp message service for the any tye of query regarding the betting and market services
                </p>
              </div>
          
        </div>
      </div>
      <div>
        <div className="h-screen bg-[#C40C0C]">
          <div className="p-6">
            <div className="flex flex-row w-[100%] ">
              <div
                className="text-5xl font-bold basis-1/2 text-[#FFC100] font-serif mt-12 "
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="2000"
              >
                <u>Deposite & Withdraw</u>
                <p className="text-2xl font-sans mt-3">
                  We have 24 Hrs Deposit and Withdraw services with the addition
                  offers. We have 20Lacks transaction with the 100% accuracy. We
                  have multiple services for transaction like online payment ,
                  it will depost in your account in 2min of period with 100%
                  accuracy. There is 100% Tax free money Deposit in your
                  account.
                </p>
                <button className=" transition ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 delay-150 hover:scale-110 hover:-translate-y-1 duration-300 hover:transition-all  text-white font-bold py-3 px-4 rounded text-xl mt-3">
                  Deposit Now
                </button>
              </div>
              <img
                src={transfer}
                className="h-96 h-sm-32 w-auto basis-1/2"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
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
