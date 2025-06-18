import Footer from "@/components/footer";
import SignInButton from "@/components/sign-in-button";
import { Button } from "@/components/ui/button";
import { fetchArticles, fetchBooks } from "@/lib/github";
import { BookOpen, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../../auth";
import ContentGrid from "./_components/content-grid";
import FeaturedContent from "./_components/featured-content";

export default async function Home() {
  const books = await fetchBooks();
  const articles = await fetchArticles();
  const session = await auth();

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        {/* ↓↓↓ "container" クラスを削除 ↓↓↓ */}
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_800px] lg:gap-12 xl:grid-cols-[1fr_1000px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  高品質なテックコンテンツを
                  <br />
                  あなたに
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  最新のプログラミング技術やトレンドに関する厳選された記事や
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  ハンズオンなどを提供しています。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {session?.user ? (
                  <Button asChild size="lg">
                    <Link href="#featured">
                      <Rocket className="mr-2 h-4 w-4" />
                      おすすめコンテンツを見る
                    </Link>
                  </Button>
                ) : (
                  <SignInButton size="lg">
                    <Rocket className="mr-2 h-4 w-4" />
                    GitHub でサインイン
                  </SignInButton>
                )}
                <Button variant="outline" size="lg" asChild>
                  <Link href="#books">
                    <BookOpen className="mr-2 h-4 w-4" />
                    本一覧を見る
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="850"
              height="850"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* ピックアップコンテンツ */}
      <section id="featured" className="py-12 bg-white dark:bg-gray-950">
        {/* ↓↓↓ "container" クラスを削除 ↓↓↓ */}
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            オススメコンテンツ
          </h2>
          <FeaturedContent />
        </div>
      </section>

      {/* コンテンツ一覧 */}
      <section id="articles" className="py-12 bg-slate-50 dark:bg-slate-900/50">
        {/* ↓↓↓ "container" クラスを削除 ↓↓↓ */}
        <div className="px-4 md:px-6">
          <ContentGrid title="記事一覧" contents={articles} />
        </div>
      </section>

      <section id="books" className="py-12 bg-white dark:bg-gray-950">
        {/* ↓↓↓ "container" クラスを削除 ↓↓↓ */}
        <div className="px-4 md:px-6">
          <ContentGrid title="本一覧" contents={books} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
