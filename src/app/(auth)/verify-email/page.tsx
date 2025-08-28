import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    // this just brab oy ke tv check email ke hz confirm then redirect tv login vinh
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Verify Your Email
        </h1>
        <p className="text-gray-600 mb-6">
          We’ve sent a confirmation link to your email address.  
          Please check your inbox (and spam folder) before continuing.
        </p>
        <p className="text-sm text-gray-500">
          Once you’ve verified your email, you can {" "}
          <Link href={'/login'} className="text-[#1F2185] underline font-semibold">log in</Link>
          {" "}again
        </p>
        <p className="text-sm text-gray-500">༼ つ ◕_◕ ༽つ</p>
      </div>
    </div>
  );
}