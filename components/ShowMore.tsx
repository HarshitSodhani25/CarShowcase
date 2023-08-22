"use client"
import { ShowMorePops } from "@/types"
import { updateSearchParams } from "@/utils"
import {useRouter} from "next/navigation"
import React from 'react'
import { CustomButton } from "."

const ShowMore = ({pageNumber, isNext}: ShowMorePops) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1)*10;
        const newPathName = updateSearchParams("limit", String(newLimit))
        router.push(newPathName);
    }
    return(
        <div className="w-full flex-center mt-10 gap-5">
            {!isNext && (
                <CustomButton title="Show More" btnType='button'containerStyles="bg-primary-blue rounded-full text-white" handleClick = {handleNavigation}/>
            )}

        </div>

    )
}

export default ShowMore