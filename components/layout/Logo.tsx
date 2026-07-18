import Image from "next/image";

export function Logo() {
  return (
    <div className="flex h-[37px] items-center gap-3">
      <Image
        src="/closeseller-logo-figma.png"
        alt=""
        width={41}
        height={35}
        className="h-[35px] w-[41px] object-contain"
        priority
        unoptimized
      />
      <div>
        <p className="text-[18px] font-bold leading-[21px] text-foreground">CloseSeller</p>
        <p className="text-[14px] leading-4 text-muted">Admin Panel</p>
      </div>
    </div>
  );
}
