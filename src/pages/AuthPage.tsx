
import AuthForm from "@/components/auth/AuthForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-flair-purple-light to-flair-purple-dark bg-clip-text text-transparent">
            Flair
          </h1>
          <p className="mt-3 text-gray-500">
            Connect with friends and share your moments with the world
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
