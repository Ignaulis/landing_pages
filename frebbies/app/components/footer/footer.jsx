import { footer } from "@/app/data/footer";

export default function Footer() {
  return (
    <footer className="flex padding-custom-sides bg-[#F8F8F8] w-full">
      <div className="flex flex-col">
        <img src={footer.logo} className="w-40" alt="logo" />
        <p className="para">{footer.param}</p>
        <div className="flex gap-3">
          <div className="custom-footer-logo">
            <footer.fb className="text-[#F53838]" />
          </div>
          <div className="custom-footer-logo">
            <footer.tw className="text-[#F53838]" />
          </div>
          <div className="custom-footer-logo">
            <footer.In className="text-[#F53838]" />
          </div>
        </div>
        <span className="text-[#AFB5C0]">{footer.cop}</span>
      </div>
      <div className=""></div>
    </footer>
  );
}
