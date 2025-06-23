# Oga's Knowledge Store - デジタルコンテンツ販売プラットフォーム

[![Deploy on store.aiichiro.jp](https://img.shields.io/badge/Live%20Demo-store.aiichiro.jp-orange?style=for-the-badge&logo=vercel)](https://store.aiichiro.jp/)

技術記事や電子書籍などのデジタル知識を販売・購入できる、フル機能のEコマースサイトです。
開発者やクリエイターが自身の知識を収益化するためのプラットフォームとして構築しました。

**👇 今すぐサイトを体験！**
### [https://store.aiichiro.jp/](https://store.aiichiro.jp/)

![Oga's Knowledge Storeのスクリーンショット](https://github.com/user-attachments/assets/5ba08f0b-57b1-4b64-8aff-daa316f823e7)

---

## 🌟 プロジェクトの特徴 (Features)

モダンなWeb技術をフル活用し、ユーザーと運営者の双方にとって快適な体験を提供します。

-   **🔐 簡単でセキュアな認証**
    -   **Auth.js (NextAuth)** を利用し、使い慣れた**GitHubアカウント**だけで簡単にログイン・ログアウトが可能です。

-   **🛍️ 洗練されたEコマース体験**
    -   トップページには特集コンテンツをダイナミックに表示し、訪問者の興味を引きます。
    -   有料・無料のコンテンツが分かりやすく区別され、グリッドレイアウトで商品を閲覧できます。

-   **💳 安全な決済システム**
    -   業界標準の決済プラットフォーム **Stripe** を完全に統合。クレジットカードによる安全でスムーズな購入体験を実現します。

-   **📖 購入済みコンテンツへの即時アクセス**
    -   購入したコンテンツは即座に閲覧可能になり、ユーザーはマイページなどで購入履歴を管理できます。

-   **🔗 高度なルーティング設計**
    -   **Next.js** のファイルベースルーティングを活用し、以下のような直感的で分かりやすいURLを設計。
        -   記事: `store.aiichiro.jp/posts/[記事のスラッグ]`
        -   本: `store.aiichiro.jp/books/[本のスラッグ]/[ページのスラッグ]`

-   **✨ モダンで美しいUI**
    -   **shadcn/ui**と**Tailwind CSS**を組み合わせ、デザイン性とアクセシビリティを両立したUIを構築しています。

## 💡 こだわりのポイント： 設計思想

### 「知識の収益化」をシームレスに

このプロジェクトの核心は、**クリエイターが持つ知識や経験を、価値ある商品として簡単に販売できる世界**を実現することです。そのために、以下の3つの体験を重視しました。

1.  **ユーザー体験**: GitHubでのワンクリックログインから、Stripeによる簡単な決済、そして購入後すぐにコンテンツを楽しめるまで、一連の流れがストレスなく完結するよう設計しています。
2.  **開発体験**: Next.js、Supabase、Auth.jsといったモダンで相性の良い技術を選定することで、開発効率とパフォーマンス、そして将来的な拡張性を高めています。
3.  **コンテンツ構造**: 単発の「記事」だけでなく、複数のページを持つ「本」という形式にも対応することで、小規模なノウハウから体系的な知識まで、多様なコンテンツの販売を可能にしています。

## 🛠️ 使用技術 (Tech Stack)

このプラットフォームは、以下の堅牢でスケーラブルな技術スタックで構築されています。

-   **Framework**: **Next.js** (App Router), **React**, **TypeScript**
-   **Authentication**: **Auth.js (NextAuth.js)**
-   **Database**: **Supabase**
-   **Payment**: **Stripe**
-   **UI & Styling**: **shadcn/ui**, **Tailwind CSS**
-   **API Integration**: **GitHub API** (認証用)

## 🚀 ローカルでの実行方法 (Getting Started)

このプロジェクトをご自身の環境で動かすには、複数の外部サービスとの連携設定が必要です。

1.  **リポジトリをクローン**
    ```sh
    git clone https://github.com/your-username/your-repository.git
    ```
2.  **ディレクトリに移動**
    ```sh
    cd your-repository
    ```
3.  **依存関係をインストール**
    ```sh
    npm install
    # または yarn install
    ```
4.  **環境変数を設定**
    `.env.local.example` を参考に `.env.local` ファイルを作成し、以下のAPIキーやシークレットを設定してください。
    -   GitHub OAuth App (`GITHUB_ID`, `GITHUB_SECRET`)
    -   Supabase (`SUPABASE_URL`, `SUPABASE_ANON_KEY`)
    -   Stripe (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_KEY`)
    -   Auth.js (`AUTH_SECRET`)
    
5.  **開発サーバーを起動**
    ```sh
    npm run dev
    # または yarn dev
    ```
    ブラウザで `http://localhost:3000` を開いてください。
