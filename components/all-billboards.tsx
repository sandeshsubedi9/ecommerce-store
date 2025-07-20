// import React from 'react'
// import { Billboard as BillboardType } from '@/types'

// interface BillboardProps {
//     data: BillboardType
// }

// const Billboard:React.FC<BillboardProps> = ({
//     data
// }) => {
//   return (
//     <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
//       <div
//         className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
//        style={{backgroundImage: `url(${data?.imageUrl})` }}>
//         <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
//             <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
//                 {data.label}
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Billboard

"use client";

import { Billboard as BillboardType } from "@/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import NoValidApi from "./ui/no-valid-api";

interface BillboardProps {
  data: BillboardType[]
}

const AllBillboards: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map((billboard) => (
            <CarouselItem key={billboard.id} className="basis-full">
              <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                <div
                  className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                  style={{ backgroundImage: `url(${billboard.imageUrl})` }}
                >
                  <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-black/30">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow">
                      {billboard.label}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default AllBillboards;

