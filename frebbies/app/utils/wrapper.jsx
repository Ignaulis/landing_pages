export default function Wrapper({ children }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e5e5e5] to-[#F6F6F6] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}
