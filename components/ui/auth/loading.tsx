import Image from "next/image";

export const Loading = () => {
    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <Image
                alt="Logo"
                src="/logo.svg"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
        </div>
    )
}