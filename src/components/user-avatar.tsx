import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signOut } from "../../auth"; // auth.tsのパスをプロジェクトに合わせてください

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          width={40}
          height={40}
          src={session.user.image!}
          alt="User Avatar"
          className="rounded-full cursor-pointer" // cursor-pointerを追加すると分かりやすい
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session?.user?.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* ▼▼▼ ここからが修正箇所 ▼▼▼ */}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <DropdownMenuItem asChild>
            {/* 
              ボタンがメニュー項目全体を占めるようにし、
              デフォルトのボタンのスタイルをリセットします。
            */}
            <button
              type="submit"
              className="w-full text-left flex justify-between items-center"
            >
              Log Out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </button>
          </DropdownMenuItem>
        </form>
        {/* ▲▲▲ ここまでが修正箇所 ▲▲▲ */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
