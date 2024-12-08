import { Logo } from "@app/components";
import { CornerRightDown } from "lucide-react";

export default function Auth() {
  return (
    <main className="h-full flex">
      <img
        src="/illustrations/login.jpg"
        alt="A small guy grasping a bag of money with all his might"
        className="hidden lg:block w-1/2 h-full object-cover"
      />
      <section className="space-y-10 w-full lg:w-1/2 h-full px-4 py-8 flex flex-col justify-between">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Logo size={4} />
          <p className="text-muted text-lg max-w-lg text-center">
            A versatile financial platform that simplifies recurring payments,
            whether you're a parent managing children's allowances or a business
            owner streamlining monthly payroll.
          </p>
        </div>
        <div className="flex flex-col gap-8 max-w-screen-sm mx-auto w-full">
          <h1 className="text-4xl text-center mx-auto flex items-end gap-3">
            <span>To Access Your Console</span>
            <CornerRightDown size={32} className="text-primary" />
          </h1>
          <button className="btn btn-primary w-full text-white">
            <svg
              className="size-6 fill-current mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <span className="text-xl">Continue with Google</span>
          </button>
        </div>
      </section>
    </main>
  );
}
