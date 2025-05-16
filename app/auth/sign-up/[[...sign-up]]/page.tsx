import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp
        path="/auth/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/auth/post-signup"
      />
    </div>
  );
}

