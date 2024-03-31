import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[#252a41]">
      <SignUp />
    </main>
  );
}
