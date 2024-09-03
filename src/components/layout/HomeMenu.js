import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute -top-[70px] left-0 -z-10">
                    <Image src={'/eforight-2.png'}
                        width={190}
                        height={250}
                        alt={'eforiro'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/efoleft-2.png'}
                        width={200}
                        height={300}
                        alt={'eforiro'} />
                </div>
            </div>
            <div className="text-center">
                <SectionHeaders
                    subHeader={'Check out'}
                    mainHeader={'Menu'} />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}