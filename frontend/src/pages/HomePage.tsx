import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
const HomePage = () => {

    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues:SearchForm) => {

        navigate({
            pathname:`/search/${searchFormValues.searchQuery}`
        })

    }
  return (
    <div className='flex flex-col gap-12'>
        <div className='flex text-center justify-center bg-white shadow-md rounded-lg py-8 flex-col gap-5 -mt-16'>
        <h1 className='font-bold text-orange-600 text-5xl tracking-tight '>
            Tuck into Takeway Today
        </h1>

        <span className='text-xl '>Food is just a Click away...!</span>
        <SearchBar placeHolder="Search by City or Town" 
                    onSubmit={handleSearchSubmit}/>
        </div>


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


    </div>
  )
}

export default HomePage
