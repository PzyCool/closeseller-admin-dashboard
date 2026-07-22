import Image from "next/image";

type UserProfile = {
  name: string;
  role: string;
  status: string;
  verification: string;
  memberSince: string;
  lastLogin: string;
  about: string;
};

const fieldLabels = [
  ["Role:", "role"],
  ["Account Status:", "status"],
  ["Verification Status:", "verification"],
  ["Member Since:", "memberSince"],
  ["Last Login:", "lastLogin"],
] as const;

export function UserProfileCard({ user }: { user: UserProfile }) {
  return (
    <section className="w-full rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(91,58,153,0.10)] lg:max-w-[360px]">
      <div className="text-center">
        <Image
          src="/admin-avatar.jpg"
          alt={user.name}
          width={104}
          height={104}
          className="mx-auto h-[104px] w-[104px] rounded-full object-cover"
          unoptimized
        />
        <h2 className="mt-5 text-[16px] font-bold text-foreground">{user.name}</h2>
        <p className="text-[16px] text-muted">{user.role}</p>
        <span className="mt-8 inline-flex rounded-[8px] bg-brand px-8 py-3 text-[16px] font-bold text-white">
          {user.status}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="text-[20px] font-bold text-foreground">Account Information</h3>
        <h4 className="mt-6 text-[14px] font-medium text-foreground">About</h4>
        <p className="mt-4 text-[12px] leading-6 text-muted">{user.about}</p>
        <dl className="mt-7 space-y-4">
          {fieldLabels.map(([label, key]) => (
            <div key={key} className="grid grid-cols-[140px_1fr] gap-4">
              <dt className="text-[14px] font-medium text-foreground">{label}</dt>
              <dd className="text-[12px] text-muted">{user[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
