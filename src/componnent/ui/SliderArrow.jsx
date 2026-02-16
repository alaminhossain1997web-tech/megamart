import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className} cursor-pointer absolute top-1/2 -left-10 z-50 -translate-y-1/2 w-20 h-20 rounded-full bg-white p-2.5`}
      onClick={onClick}>
        <div className='w-full h-full rounded-full bg-[#F3F9FB] flex justify-center items-center '>
          <BiChevronLeft className='w-10 h-10 text-brand'/>
        </div>
    </div>
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`hidden md:block ${className} cursor-pointer absolute top-1/2 -right-10 z-50 -translate-y-1/2 w-20 h-20 rounded-full bg-white p-2.5`}
      onClick={onClick}>
        <div className='w-full h-full rounded-full bg-[#F3F9FB] flex justify-center items-center '>
          <BiChevronRight className='w-10 h-10 text-brand'/>
        </div>
    </div>
  );
}
export {NextArrow,PrevArrow};