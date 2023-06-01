import Link from "next/link";

function CallToAction() {
  return (
    <div className="bg-violet-950">
      <div className="bg-[url('/bg-boost-desktop.svg')] object-cover w-full h-full bg-no-repeat">
        <div className="py-14 px-10 text-center text-white flex flex-col space-y-4 md:py-18">
          <h1 className="font-bold text-3xl">Boost your links today</h1>
          <Link
            href="#"
            className="bg-teal-500 py-3 px-10 w-auto mx-auto rounded-full hover:bg-teal-300 font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
