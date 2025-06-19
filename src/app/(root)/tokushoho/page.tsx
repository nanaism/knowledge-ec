const DetailItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 border-t border-gray-200 py-6">
    <dt className="font-semibold text-gray-800 md:col-span-1">{label}</dt>
    <dd className="text-gray-600 md:col-span-3">{children}</dd>
  </div>
);

export default function TokushohoPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            オンラインストアの運営に関する情報です。
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <dl>
            <DetailItem label="販売業社の名称">大賀 愛一郎</DetailItem>

            <DetailItem label="運営統括責任者">大賀 愛一郎</DetailItem>

            <DetailItem label="所在地">
              請求があったら遅滞なく開示します
            </DetailItem>

            <DetailItem label="電話番号">
              請求があったら遅滞なく開示します
            </DetailItem>

            <DetailItem label="メールアドレス">
              datealife2525@gmail.com
            </DetailItem>

            <DetailItem label="販売価格">
              各商品ページに記載の金額（消費税込み）
            </DetailItem>

            <DetailItem label="追加手数料等の追加料金">なし</DetailItem>

            <DetailItem label="受け付け可能な決済手段">
              クレジットカード
            </DetailItem>

            <DetailItem label="決済期間">
              クレジットカード決済の場合はただちに処理されます。
            </DetailItem>

            <DetailItem label="引渡時期">
              決済完了後、直ちにご利用（閲覧）いただけます。
            </DetailItem>

            <DetailItem label="交換および返品（返金ポリシー）">
              デジタルコンテンツという商品の特性上、ご購入後の返金・返品については、原則お受けできません。予めご了承ください。
            </DetailItem>
          </dl>
        </div>
      </div>
    </main>
  );
}
