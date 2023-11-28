import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={80} height={80} alt="logo" priority />
    </Link>
  );
};

export default Logo;
