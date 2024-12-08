export default function Logo({ size = 3 }: { size?: 2 | 3 | 4 | 5 | 6 }) {
  return (
    <div className="flex items-end gap-2 w-max">
      <div className="relative">
        <div className="absolute w-10 h-8 bg-secondary rounded-sm shadow-sm transform -translate-x-2 -translate-y-2" />
        <div className="relative w-10 h-8 bg-primary rounded-sm shadow-xl z-10" />
      </div>
      <h1 className={`text-${size}xl font-bold font-sans`}>
        <span className="text-secondary">P</span>
        <span className="text-primary">ay</span>
        <span className="text-secondary">d</span>
        <span className="text-primary">ay</span>
      </h1>
    </div>
  );
}
