import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
import Carousal from "@/components/Carousal"
import StatsSection from "@/components/StatsSection"
import steps from "../assets/steps.png"
import { useState } from "react"
import { Example } from "@/components/Example"
import ContactForm from "./ContactForm"

// const Accordion = ({question, answer}) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleAccordion = () => {
//       setIsOpen(!isOpen);
//     };
//     return (
//         <div className="border-b border-gray-300 rounded mb-4">
//       <div
//         className="flex items-center justify-between py-4 cursor-pointer"
//         onClick={toggleAccordion}
//       >
//         <div className="flex">
//           <div className="w-5 h-5 bg-orange-600  bg-opacity-50 rounded-full mr-5 "></div>
//           <h2 className="text-lg font-semibold">{question}</h2>
//         </div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className={`w-6 h-6 transition-transform ${
//             isOpen ? 'rotate-180' : 'rotate-0'
//           }`}
//         >
//           {isOpen ? (
//             <path d="M18 15L12 9L6 15" />
//           ) : (
//             <path d="M6 9L12 15L18 9" />
//           )}
//         </svg>
//       </div>
//       {isOpen && (
//         <div className="p-4">
//           <p className='text-[#696984]  text-sm'>{answer}</p>
//         </div>
//       )}
//     </div>
//       );
//     };

const Accordion = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-300 rounded mb-4">
        <div
          className="flex items-center justify-between py-4 cursor-pointer"
          onClick={onClick}
        >
          <div className="flex">
            <div className="w-5 h-5 bg-orange-600 bg-opacity-50 rounded-full mr-5"></div>
            <h2 className="text-lg font-semibold">{question}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-6 h-6 transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            {isOpen ? (
              <path d="M18 15L12 9L6 15" />
            ) : (
              <path d="M6 9L12 15L18 9" />
            )}
          </svg>
        </div>
        {isOpen && (
          <div className="p-4">
            <p className="text-[#696984] text-sm">{answer}</p>
          </div>
        )}
      </div>
    );
  };

    const Questions=[
        {
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
            question:"Consectetur adipiscing elit, sed do ",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Eiusmod tempos Lorem ipsum",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
    ]
const HomePage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues:SearchForm) => {

        navigate({
            pathname:`/search/${searchFormValues.searchQuery}`
        })

    }
    
  return (
    <div className='flex flex-col gap-12'>
        <div className='md:px-32  flex text-center justify-center bg-white shadow-md rounded-lg py-8 flex-col gap-5 -mt-16'>
        <h1 className='font-bold text-orange-600 text-5xl tracking-tight '>
            Tuck into Takeway Today
        </h1>

        <span className='text-xl '>Food is just a Click away...!</span>
        <SearchBar placeHolder="Search by City or Town" 
                    onSubmit={handleSearchSubmit}/>
        </div>

    <StatsSection/>
    <img src={steps} alt="" />

       
      <ContactForm/>
        





    <Example/>


    <div className=" mx-8  lg:mx-20 p-4">
        <h1 className='text-center  text-xl sm:text-2xl  mx-12 md:mx-0  mt-[77px] lg:text-4xl font-semibold'>Frequently asked Questions</h1> 

     {Questions.map((question, index) => (
        <Accordion
          key={index}
          question={question.question}
          answer={question.answer}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>


    <Carousal/>
    <div className='grid  md:grid-cols-2 gap-5'>
            <img src={landing} alt="" />

            <div className='flex flex-col items-center text-center justify-center gap-4'>
                <span className='text-3xl  tracking-tighter font-bold'>
                    Order Takeway Even Faster 
                </span>
                <span>Download the MERN Eats App  and enjoy ordering food in seconds.</span>
                <img src={appDownload} alt="" />
            </div>

        </div>

    {/* <StatsSection/> */}

    </div>
  )
}

export default HomePage
