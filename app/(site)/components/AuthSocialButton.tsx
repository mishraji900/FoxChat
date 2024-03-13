import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-[#22C55E] 
        px-4 
        py-2 
        text-gray-200
        shadow-sm 
        ring-1 
        ring-inset 
        ring-[#22C55E] 
        hover:bg-[#22B357] 
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;
