export default function Wrapper({ children }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e5e5e5] to-[#F6F6F6]">
      {children}
    </div>
  );
}
