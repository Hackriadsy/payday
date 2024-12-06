import { Logo } from "@app/components";
import { MailQuestion } from 'lucide-react'

export default function Login() {
  return (
    <main className="h-full flex">
      <img
        src="/illustrations/login.jpg"
        alt="A small guy grasping a bag of money with all his might"
        className="hidden lg:block w-1/2 h-full object-cover"
      />
      <section className="space-y-10 w-1/2 h-full px-4 py-8 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-16">
          <h1 className="text-4xl text-center">
            Login to Your Account
          </h1>
          <form className="space-y-5 max-w-screen-sm mx-auto w-full">
            <label className="input input-bordered flex items-center gap-2">
              <MailQuestion size={24} />
              <input type="email" placeholder="Your Email" className="grow" />
            </label>
            <button className="btn btn-primary w-full text-lg text-white">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
}
