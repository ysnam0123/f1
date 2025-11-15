export default function ResultTable() {
  return (
    <>
      <div className="hide-scrollbar h-full overflow-y-scroll rounded-b-[10px] border-1 border-[#202020] bg-[#202020] px-5">
        <div className="sticky top-0 mb-2 grid h-[50px] grid-cols-7 border-b-1 border-[#a8a8a8] bg-[#202020] px-[10px] pt-[12px] text-center text-[17px] font-semibold">
          <div>순위</div>
          <div>드라이버 번호</div>
          <div>드라이버</div>
          <div>팀</div>
          <div>랩</div>
          <div>시간</div>
          <div>포인트</div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
