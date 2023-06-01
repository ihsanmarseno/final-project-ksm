import InfoCard from "./InfoCard";
import brandRecog from "../assets/images/icon-brand-recognition.svg";
import detailRec from "../assets/images/icon-detailed-records.svg";
import fullyCustom from "../assets/images/icon-fully-customizable.svg";

function InfoSection() {
  return (
    <div className="mt-20 pb-20 w-5/6 mx-auto">
      <div className="flex flex-col space-y-4 text-center lg:w-1/2 mx-auto lg:pb-10">
        <h1 className="font-bold text-4xl">Advanced Statistics</h1>
        <p className="text-gray-500 text-lg">
          Track how your links are preforming across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="mt-20 relative w-full">
        <div className="bg-teal-400 w-2 h-full absolute top-0 left-1/2 -translate-x-1/2 lg:h-2 lg:top-1/2 lg:right-0 lg:-translate-x-0 lg:left-0 lg:w-full"></div>
        <div className="flex flex-col space-y-20 lg:flex-row lg:space-x-4 lg:space-y-0">
          <InfoCard
            icon={brandRecog}
            title="Brand Recognition"
            subTitle="Boost your brand recognition with each click. Genertic links
          don't mean a thing. Branded links help instil confidence in your
          content."
          />
          <InfoCard
            icon={detailRec}
            title="Detailed Records"
            subTitle="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <InfoCard
            icon={fullyCustom}
            title="Fully Customizable"
            subTitle="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
