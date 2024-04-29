import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import transfer from './transfer.svg';
import logo from "./logo.png";
import sports from './sports.svg';


function App() {
  AOS.init();
  return (
    <>
      <div className='w-full flex h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p4.jpg")]  '>
        <div className='m-20  w-[100%] '>
          <div className='backdrop-blur-sm'>
            <div className='flex flex-row '>

          <img src={logo} className='h-32 h-sm-32 w-auto basis-1/6'  data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500"/>
          <div className='text-8xl font-bold basis-5/6 text-[#fcf7ea] font-serif mt-3'data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">Shambhu BetBook</div>
            </div>

          
          <div className='flex flex-row '>
            <div className='basis-1/6'></div>
            <div className='text-5xl font-bold basis-4/6 text-[#fcf7ea] font-mono mt-3' data-aos="fade-left" data-aos-delay="1050" data-aos-duration="500">India's Biggest Site
              {/* <p>shambhubetbook.com</p> */}
            </div>
            </div>
            </div>
          
        </div>

      </div>
      <div>

        <div className='h-screen bg-[#FF6500]'>
          <div className='p-6' >
            <div className='flex flex-row w-[100%] '>
              <img src={sports} className='h-96 h-sm-32 w-auto basis-1/2'  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500"/>
              <div className='text-8xl font-bold basis-1/2 text-[#C40C0C] font-serif mt-12 ' data-aos="fade-up" data-aos-offset="200" data-aos-delay="1000" data-aos-duration="2500">All Sports</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p5.jpg")]'>
      </div>
      <div>

        <div className='h-screen bg-[#C40C0C]'>
          <div className='p-6' >
            <div className='flex flex-row w-[100%] '>
              <img src={transfer} className='h-96 h-sm-32 w-auto basis-1/2'  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500"/>
              <div className='text-8xl font-bold basis-1/2 text-[#FFC100] font-serif mt-12 ' data-aos="fade-up" data-aos-offset="200" data-aos-delay="1000" data-aos-duration="2500">Instant Withdrawal</div>
            </div>
          </div>
        </div>
      </div>
    
   
      <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url("../public/p6.jpg")]'>
      </div>
      <div className='h-screen bg-pink-200 '>  
      </div>
    </>
  );
}

export default App;
