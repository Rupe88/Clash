import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Image src="/not-found.svg" width={500} height={500} />

      <Button className="bg-black text-white hover:text-black hover:bg-white">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
