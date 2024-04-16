import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black flex h-dvh items-center justify-center">
      <div className="w-[327px] p-6 gap-6 flex flex-col items-center h-fit bg-dark_grey overscroll-contain rounded-xl sm:w-[384px] sm:p-10 sm:gap-6">
        <div className="relative w-[88px] aspect-square rounded-full">
          <Image
            src={"/images/avatar-jessica.jpeg"}
            alt="photo-profile"
            fill
            className="rounded-full object-center center"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl leading-normal text-white">
            Jessica Randall
          </h1>
          <p className="text-neon_green text-sm leading-normal font-bold">
            London, United Kingdom
          </p>
        </div>
        <div>
          <p className="text-sm leading-normal font-normal text-white">{`"Front-end developer and avid reader."`}</p>
        </div>
        <div className="flex flex-col w-full gap-4 text-sm leading-normal font-bold text-white *:bg-grey *:rounded-lg *:flex *:flex-row *:p-3 *:items-center *:justify-center [&_div:hover]:bg-neon_green [&_div:hover]:text-grey *:cursor-pointer">
          <div>Github</div>
          <div>Frontend Mentor</div>
          <div>LinkedIn</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>
      </div>
    </main>
  );
}
