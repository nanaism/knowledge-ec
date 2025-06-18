import Link from "next/link";
import { auth } from "../../auth";
import SignInButton from "./sign-in-button";
import UserAvatar from "./user-avatar";

async function Header() {
  const session = await auth();
  return (
    <nav className="border-b sticky top-0 z-50 bg-background">
      <div className="flex h-16 items-center container mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Oga&apos;s Knowledge EC</span>
        </Link>

        <div className="ml-auto flex items-center space-x-4">
          {session?.user ? <UserAvatar /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
