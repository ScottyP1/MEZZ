import Image from "next/image"

export default function Products() {
    return (
        <div className="mt-12 mx-3">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6">
                    {[1, 2].map((item) => (
                        <div key={item} className="bg-white/[.05] p-2 rounded-xl flex flex-col items-center">
                            <Image
                                src="/shirt.png"
                                width={200}
                                height={200}
                                alt="shirt"
                                className="rounded-xl"
                            />
                            <p className="text-white mt-2 text-sm text-center">MEZZ. Logo Black T-Shirt</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
