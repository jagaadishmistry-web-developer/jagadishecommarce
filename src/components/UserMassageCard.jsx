import Image from "next/image";
import massageUser from "../../public/massageUser.png";
import { FaReplyAll } from "react-icons/fa6";

const UserMassageCard = () => {
  return (
    <>
      <div className="py-6">
        <div className="grid lg:grid-cols-6 p-6 lg:gap-0 gap-4 border rounded-lg border-primary">
          <Image src={massageUser} alt="image" className="lg:col-span-1" />
          <div className="lg:col-span-5 flex flex-col gap-2">
            <h1 className="xl:text-lg font-medium text-primary">Alex Doe</h1>
            <p className="pr-6">
              You all must have heard and observed about your Personality Traits
              according to your Olars CandleLoremLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididu.
            </p>
            <p className="flex lg:flex-row flex-col lg:justify-between">
              <span className="flex gap-1 items-center text-primary">
                <FaReplyAll />
                Reply
              </span>
              <span>6 May, 2021 7:26 Am</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMassageCard;
