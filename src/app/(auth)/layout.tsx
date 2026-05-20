import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* <div className="w-[230px] h-[230px] bg-primary-200 blur-[104px] absolute top-0 right-0 -z-20"></div> */}
      <div className="w-[230px] h-[230px] bg-primary-200 blur-[104px] absolute bottom-0 left-0 -z-20"></div>

      {/* auth nav */}
      <nav className="sticky top-0 h-20 z-[999] bg-white-base flex items-center px-5 md:px-10 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/victory-motors-logo.jpeg"
            alt="Victory Motors"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="font-bold text-vm-navy-900">Victory Motors</span>
        </Link>
      </nav>

      {/* auth content  */}
      <main className="flex-1 flex flex-col justify-center items-cente px-5 md:px-10 lg:px-20">
        {children}
      </main>
    </div>
  );
}
