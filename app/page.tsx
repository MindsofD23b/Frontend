import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F23200_2%,#C72C00_17%,#4A0E00_70%,#0D0D0D_100%)] text-white">
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-200">
          To access your account and coordinate operations, click{" "}
          <Link
            href="/login"
            className="underline font-semibold hover:opacity-80"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
