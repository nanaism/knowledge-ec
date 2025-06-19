const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4 mb-4">
      {title}
    </h2>
    <div className="space-y-4 text-gray-600">{children}</div>
  </section>
);

export default function PrivacyPolicyPage() {
  const siteName = "Oga's Knowledge Store"; // あなたのサイト名
  const operatorName = "大賀 愛一郎"; // あなたの名前
  const contactEmail = "datealife2525@gmail.com"; // 連絡先メール

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            最終更新日: {new Date().toLocaleDateString("ja-JP")}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            {operatorName}
            （以下「当方」といいます。）は、当方が提供するウェブサイト「
            {siteName}
            」（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>

          <PolicySection title="第1条（個人情報）">
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </PolicySection>

          <PolicySection title="第2条（個人情報の収集方法）">
            <p>
              本サービスでは、ユーザーが利用登録をする際に、氏名、メールアドレスなどの個人情報をお尋ねすることがあります。当方は、以下の方法で個人情報を収集します。
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>GitHub認証による情報取得:</strong>{" "}
                ユーザーがGitHubアカウントを利用して本サービスに登録する際、GitHubから提供されるユーザーID、ユーザー名、メールアドレス等の情報を取得します。
              </li>
              <li>
                <strong>決済情報:</strong>{" "}
                ユーザーが有料コンテンツを購入する際、決済処理のためにStripe社を利用します。当方はクレジットカード情報自体を保持せず、Stripe社から提供される決済IDや購入履歴情報を受け取ります。
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="第3条（個人情報を収集・利用する目的）">
            <p>当方が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ul className="list-disc pl-6">
              <li>本サービスの提供・運営のため</li>
              <li>
                ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
              </li>
              <li>
                ユーザーが利用中のサービスの更新情報、キャンペーン等及び当方が提供する他のサービスの案内のメールを送付するため
              </li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>
                利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
              </li>
              <li>
                ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
              </li>
              <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>
          </PolicySection>

          <PolicySection title="第4条（個人情報の第三者提供）">
            <p>
              当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="list-disc pl-6">
              <li>
                人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
              </li>
              <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
              </li>
              <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
              </li>
            </ul>
            <p>
              また、本サービスの提供に必要な範囲内で、以下のサービスに個人情報を提供することがあります。
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Stripe:</strong> 決済処理のため。
                (Stripe社のプライバシーポリシー: https://stripe.com/jp/privacy)
              </li>
              <li>
                <strong>Supabase:</strong>{" "}
                ユーザー情報および購入履歴のデータベースとして。
                (Supabase社のプライバシーポリシー: https://supabase.com/privacy)
              </li>
              <li>
                <strong>Vercel:</strong> 本サービスのホスティングのため。
                (Vercel社のプライバシーポリシー:
                https://vercel.com/legal/privacy-policy)
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="第5条（個人情報の開示、訂正、削除）">
            <p>
              当方は、本人から個人情報の開示、訂正、追加、削除、利用停止を求められたときは、本人であることを確認した上で、遅滞なく対応します。ご希望の場合は、下記のお問い合わせ先までご連絡ください。
            </p>
          </PolicySection>

          <PolicySection title="第6条（Cookieの使用について）">
            <p>
              本サービスは、ユーザーの利便性の向上やセッション管理のためにCookieを使用しています。ユーザーはブラウザの設定でCookieを無効にすることができますが、その場合、本サービスの一部機能が利用できなくなることがあります。
            </p>
          </PolicySection>

          <PolicySection title="第7条（プライバシーポリシーの変更）">
            <p>
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </PolicySection>

          <PolicySection title="第8条（お問い合わせ窓口）">
            <p>
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              <br />
              屋号・氏名: {operatorName}
              <br />
              Eメールアドレス: {contactEmail}
            </p>
          </PolicySection>
        </div>
      </div>
    </main>
  );
}
