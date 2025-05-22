export default function Footerlist({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text=[14px] mb-4 font-medium text-[#0B132A] sm:text-[18px]">
        {data.name}
      </span>
      {data.list.map((e) => (
        <a
          href={`#${e}`}
          className="footer-hover text-[12px] text-[#4F5665] sm:text-[16px]"
          key={e}
        >
          {e}
        </a>
      ))}
    </div>
  );
}
