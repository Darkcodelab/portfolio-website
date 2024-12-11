export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2
        title={title}
        className="inline-block text-[74px] font-bold text-gray-100 opacity-50 lg:text-[96px]"
      >
        {title}
      </h2>
    </div>
  );
}
