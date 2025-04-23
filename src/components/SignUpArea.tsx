import { FC, useState, useEffect } from "react";

const SignUpArea: FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (!email) {
      setError("");
      return;
    }
    if (!isDirty) return;
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  }, [email, isDirty]);

  const handleSubmit = () => {
    setIsDirty(true);
    
    if (!email || !validateEmail(email)) {
      return;
    }

    window.open("https://app.loch.one/welcome", "_blank", "noopener,noreferrer");
    setEmail("");
  };
  
  return (
    <div className="w-full h-full flex flex-col 2xl:justify-start items-center justify-center 2xl:pt-[192px] max-lg:py-[48px] max-sm:py-[32px]">
      <div className="max-w-[365px]">
        <p className="text-[#B0B1B3] text-[39px] font-medium leading-[120%] mb-8">
          Sign up for
          <br />
          exclusive access.
        </p>
        <div className="relative">
          <input
            className={`bg-[#fff] mb-2 border ${error && isDirty ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-[#E5E5E6] focus:border-[#000000] focus:ring-[#000000]/30'} rounded-[8px] py-5 px-6 text-[16px] w-full placeholder:text-[#CACBCC] text-[#19191a] font-medium leading-[120%] transition-all duration-200 hover:border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:shadow-[0px_4px_10px_rgba(0,0,0,0.1)]`}
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!isDirty) setIsDirty(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <div className={`absolute -bottom-6 left-0 w-full transition-all duration-200 ease-in-out ${error && isDirty ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
            <p className="text-red-500 text-xs font-medium">
              {error}
            </p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#000] outline-none cursor-pointer mt-8 mb-6 border border-[#E5E5E6] rounded-[8px] py-5 text-center text-[16px] w-full placeholder:text-[#CACBCC] text-[#fff] font-semibold leading-[120%] transition-all duration-200 hover:bg-[#2b2b2b]"
        >
          Get Started
        </button>
        <p className="py-[18px] font-semibold text-[16px] leading-[120%] text-[#19191a]">
          You'll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUpArea;
