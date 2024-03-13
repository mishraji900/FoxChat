import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-[#0C0A09]
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="100"
          width="100"
          className="mx-auto w-auto rounded-md hover:scale-110 duration-500"
          src="/logo2.jpg"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-100
          "
          >
            Sign in to your account
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
