import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/logo.svg";

type Props = {
  size: number;
  className?: string;
};

export default function Logo({ size, className }: Props) {
  return (
    <Link href="/#top" className={className}>
      <Image
        src={Icon}
        alt="Description"
        width={size}
        height={size}
        className="hover:opacity-70 transition"
      />
    </Link>
  );
}
