export default function SessionItem({
  date,
  title,
  time,
}: {
  date: string;
  title: string;
  time: string;
}) {
  return (
    <>
      <div className="flex rounded-[8px] border-1 border-white px-3 py-[12px]">
        <p className="mr-[33px]">{date}</p>
        <p className="mr-auto">{title}</p>
        <p>{time}</p>
      </div>
    </>
  );
}
