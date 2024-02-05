import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Manusha Ravindrathas
      <Link
      href="/home"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
      </Link>
    </main>
  );
}
