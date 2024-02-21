export function ExperienceBar() {
  return (
    <header className="flex items-center mb-20 mt-5 ">
      <span className="text-base">0 xp</span>
      <div className="flex-1 h-1 rounded-[4px] bg-gray-300 my-0 mx-6 relative ">
        <div className="h-1 rounded-[4px] bg-green-500" style={{ width: "50%" }}>
          <span className="absolute top-3 -translate-x-[50%]" style={{left: "50%"}}>300 xp</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  )
}
