import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
      <h1 className="text-3xl">Todo application</h1>
      <div>
        <Link rel="stylesheet" className="p-4 border border-white box-border inline-block mt-4" href="/signup" >Sign up </Link>
      </div>
      <div>
      <Link rel="stylesheet" className="p-4 border border-blue-500 bg-blue-500  box-border inline-block mt-4" href="/signin" >Sign in </Link>
      </div>
      </div>
     
    </div>
  );
}
