import Link from "next/link";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPintrest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center p-20 text-center space-y-8 md:flex-row md:items-start md:space-y-0 md:justify-between md:flex-wrap">
      <h1 className="text-white font-bold text-4xl">Shortly</h1>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Features</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            Link Shortening
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Branded Links
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Analytics
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Resources</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            Blog
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Developers
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Support
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Company</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            About
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Our Team
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Careers
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Contact
          </Link>
        </div>
      </div>

      <div className="text-white flex space-x-6">
        <Link href="#">
          <Image src={iconFacebook} alt="icon" />
        </Link>
        <Link href="#">
          <Image src={iconTwitter} alt="icon" />
        </Link>
        <Link href="#">
          <Image src={iconPintrest} alt="icon" />
        </Link>
        <Link href="#">
          <Image src={iconInstagram} alt="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
