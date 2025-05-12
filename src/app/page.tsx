"use client"
import { useRouter } from "next/navigation";
import { Reggae_One } from "next/font/google";
import { useEffect } from "react";

const reggae = Reggae_One({
  weight: '400', // Only 400 is available for Reggae One
  subsets: ['latin'],
});

export default function Home(){
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/get_started'), 3000)
  }, [router])

  return (
    <main className={`${reggae.className} row-span-12 m-auto`}>
      <div className="w-full animate-pulse text-4xl">
        <p>SwitchFi</p>
        <small></small>
      </div>
    </main>
  );
}
