import Link from "next/link";

const HANDLE = "@oga_aiichiro";
const DEVELOPER_LINK = "https://oga.aiichiro.jp";

function Footer() {
  return (
    <footer className="text-center py-8 border-t">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-500">
        <Link
          href="/tokushoho"
          className="hover:text-blue-500 transition-colors"
        >
          特定商取引法に基づく表記
        </Link>
        <span className="hidden sm:inline">|</span>
        <Link href="/privacy" className="hover:text-blue-500 transition-colors">
          プライバシーポリシー
        </Link>
      </div>
      <p className="text-gray-500 mt-4">
        Created by{" "}
        <a
          className="text-blue-500"
          href={DEVELOPER_LINK}
          target="_blank"
          rel="noreferrer"
        >
          {HANDLE}
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
