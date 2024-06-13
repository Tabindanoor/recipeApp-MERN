import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
import Carousal from "@/components/Carousal"
import StatsSection from "@/components/StatsSection"
import steps from "../assets/steps.png"
import { useState } from "react"
import { Example } from "@/components/Example"



// const Accordion = ({ question, answer, isOpen, onClick }) => {
//     return (
//       <div className="border-b border-gray-300 rounded mb-4">
//         <div
//           className="flex items-center justify-between py-4 cursor-pointer"
//           onClick={onClick}
//         >
//           <div className="flex">
//             <div className="w-5 h-5 bg-orange-600 bg-opacity-50 rounded-full mr-5"></div>
//             <h2 className="text-xl font-semibold">{question}</h2>
//           </div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={`w-6 h-6 transition-transform ${
//               isOpen ? 'rotate-180' : 'rotate-0'
//             }`}
//           >
//             {isOpen ? (
//               <path d="M18 15L12 9L6 15" />
//             ) : (
//               <path d="M6 9L12 15L18 9" />
//             )}
//           </svg>
//         </div>
//         {isOpen && (
//           <div className="p-4">
//             <p className="text-[#696984] text-lg ">{answer}</p>
//           </div>
//         )}
//       </div>
//     );
//   };


//     const Questions=[
//         {
//             question:"  How do I place an order?            ",
//             answer:"You can browse the menu, select your favorite dishes, and add them to your cart. Once you’re ready, proceed to checkout and follow the prompts to complete your order. "
//         },
//         {
//             question:"What payment methods do you accept? ",
//             answer:"We accept various payment methods, including credit/debit cards, PayPal, and online payment options like Stripe. You can also choose to pay cash on delivery if available. "
//         },{
//             question:"Can I schedule an order for later?",
//             answer:" Yes, you can schedule orders for a later time or date during the checkout process. Simply select your preferred delivery time, and we’ll ensure your food arrives fresh and on time."
//         },{
//             question:" What if I have an issue with my order?",
//             answer:"If you encounter any issues with your order, please contact our customer support team immediately through the app or website. We are committed to resolving any problems promptly to ensure your satisfaction."
//         },{
//             question:"Can I customize my order?",
//             answer:" Yes, you can customize your order by adding special instructions or selecting specific preferences for your dishes during the ordering process. Our kitchen will do its best to accommodate your requests."
//         },
//     ]


type AccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion = ({ question, answer, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="border-b border-gray-300 rounded mb-4">
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex">
          <div className="w-5 h-5 bg-orange-600 bg-opacity-50 rounded-full mr-5"></div>
          <h2 className="text-xl font-semibold">{question}</h2>
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
          <p className="text-[#696984] text-lg ">{answer}</p>
        </div>
      )}
    </div>
  );
};

type Question = {
  question: string;
  answer: string;
};

const Questions: Question[] = [
  {
    question: "How do I place an order?",
    answer: "You can browse the menu, select your favorite dishes, and add them to your cart. Once you’re ready, proceed to checkout and follow the prompts to complete your order."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including credit/debit cards, PayPal, and online payment options like Stripe. You can also choose to pay cash on delivery if available."
  },
  {
    question: "Can I schedule an order for later?",
    answer: "Yes, you can schedule orders for a later time or date during the checkout process. Simply select your preferred delivery time, and we’ll ensure your food arrives fresh and on time."
  },
  {
    question: "What if I have an issue with my order?",
    answer: "If you encounter any issues with your order, please contact our customer support team immediately through the app or website. We are committed to resolving any problems promptly to ensure your satisfaction."
  },
  {
    question: "Can I customize my order?",
    answer: "Yes, you can customize your order by adding special instructions or selecting specific preferences for your dishes during the ordering process. Our kitchen will do its best to accommodate your requests."
  },
];

const HomePage = () => {
    // const [openIndex, setOpenIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const handleAccordionClick = (index:number) => {
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

       
    <Example/>


    <div className=" mx-8  lg:mx-20 p-4">
        <h1 className='text-center  text-xl sm:text-2xl  mx-12 md:mx-0  lg:text-4xl font-semibold'>Frequently asked Questions</h1> 

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
