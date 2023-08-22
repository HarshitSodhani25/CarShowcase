"use client"
import {useState} from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton"
import {calculateCarRent, generateCarImageUrl} from "@/utils"
import CarDetails from "./CarDetails"

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div> 

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px]">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px]">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)} alt="car-model" fill priority className="object-contain"/>
            </div>
            <div className="relative flex mt-2 w-full">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" alt="steering-wheel" height={20} width={20}/>
                        <p className="text-[14px]">
                            {transmission==='a'? "Automatic": "Manual"}

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" alt="steering-wheel" height={20} width={20}/>
                        <p className="text-[14px]">
                            {drive.toUpperCase()}

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" alt="steering-wheel" height={20} width={20}/>
                        <p className="text-[14px]">
                            {Math.round(city_mpg*0.425144*100)/100} Km/lt.

                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton title="view-more" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white-text-[14px] leading-[17px] font-bold" rightIcon="/right-arrow.svg" handleClick={()=>setIsOpen(true)} btnType="button" />
                </div> 
            </div>
            <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
        </div>
    )
}
export default CarCard;