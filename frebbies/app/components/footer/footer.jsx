import { footer } from "@/app/data/footer";
import Subscribe from "../subscribe/subscribe";
import Footerlist from "./footerlist";
import { useContext } from "react";
import { ScrollContext } from "@/app/context/scrollContext";

export default function Footer() {
  const { refs } = useContext(ScrollContext);
  return (
    <footer
      ref={refs.Help}
      className="padding-custom-sides relative flex w-full bg-[#e5e5e5] pt-50 pb-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
    >
      <Subscribe />
      <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-between md:gap-0">
        <div className="flex w-full flex-col items-center gap-4 md:max-w-[330px] md:items-start md:gap-6 lg:gap-8">
          <img src={footer.logo} className="w-40" alt="logo" />
          <p className="text-center text-[16px] leading-[30px] text-[#4F5665] md:text-start">
            {footer.param}
          </p>
          <div className="flex gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com"
            >
              <div className="custom-footer-logo footer-hover">
                <footer.fb className="text-[#F53838]" />
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.x.com"
            >
              <div className="custom-footer-logo footer-hover">
                <footer.tw className="text-[#F53838]" />
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com"
            >
              <div className="custom-footer-logo footer-hover">
                <footer.In className="text-[#F53838]" />
              </div>
            </a>
          </div>
          <span className="text-[#AFB5C0]">{footer.cop}</span>
        </div>
        <div className="flex w-full justify-between md:w-1/2">
          <Footerlist data={footer.product} />
          <Footerlist data={footer.engage} />
          <Footerlist data={footer.money} />
        </div>
      </div>
    </footer>
  );
}
