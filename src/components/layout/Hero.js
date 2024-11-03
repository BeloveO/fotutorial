import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Fresh from<br />
                    Our Kitchen to Your&nbsp;
                    <span className="text-primary">
                        Home
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Rediscover the Joy of Eating Home-Cooked Food, Just Like Mom Used to Make
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary justify-center uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={"/py-2.png"} 
                    layout={'fill'}
                    objectFit="contain" 
                    alt={"py"} 
                />
            </div>
        </section>
    );
}