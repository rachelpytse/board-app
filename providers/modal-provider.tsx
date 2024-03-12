"use client"

import { useEffect, useState } from "react"

import { RenameModal } from "@/components/modals/rename-modal"

export const ModalProvider = () => {
    //because even with use clien it only means that it is client component but it is still server side rendering
    //it ensures the return component will only be visible on the client side
    //this modal provider allows to use it once for all the modals
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return(
        <>
            <RenameModal/>
        </>
    )
}