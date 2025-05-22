export default function Footerlist({ data }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-medium text-[#0B132A] text-[18px] mb-4">
        {data.name}
      </span>
      {data.list.map((e) => (
        <a href={`#${e}`} className="text-[#4F5665] footer-hover" key={e}>
          {e}
        </a>
      ))}
    </div>
  );
}
