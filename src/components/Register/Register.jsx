// src/components/AuthPage.jsx
import { useState } from "react";
import AuthSidebar from "./Registerlayout.jsx";
import { SignInForm } from "./Sign-in.jsx";
import { SignUpForm } from "./Sign-up.jsx";
import { VerifyForm } from "./Verify.jsx";
import { PasswordForm } from "./Password.jsx";

export default function AuthPage() {
  const [view, setView] = useState("signin");

  const renderPanel = () => {
    switch (view) {
      case "signup":
        return <SignUpForm onSwitch={setView} />;
      case "verify":
        return <VerifyForm onSwitch={setView} />;
      case "password":
        return <PasswordForm onSwitch={setView} />;
      default:
        return <SignInForm onSwitch={setView} />;
    }
  };

  return (
   <div className="flex flex-col sm:flex-row min-h-screen">
      <div className="w-full sm:flex-[1.2] bg-[#FFD56E]">
        <AuthSidebar />
      </div>
      <div className="w-full sm:flex-[1.8] pb-32">
        {renderPanel()}
      </div>
    </div>
  );
}
