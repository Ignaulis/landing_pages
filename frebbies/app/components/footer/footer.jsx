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
      className="relative pt-10 pb-20 flex padding-custom-sides bg-[#e5e5e5] justify-between mt-40 w-full"
    >
      <Subscribe />
      <div className="flex flex-col w-[330px] gap-8">
        <img src={footer.logo} className="w-40" alt="logo" />
        <p className="text-[#4F5665] text-[16px] leading-[30px]">
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

          <a target="_blank" rel="noopener noreferrer" href="https://www.x.com">
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
      <div className="flex w-1/2 justify-between">
        <Footerlist data={footer.product} />
        <Footerlist data={footer.engage} />
        <Footerlist data={footer.money} />
      </div>
    </footer>
  );
}
