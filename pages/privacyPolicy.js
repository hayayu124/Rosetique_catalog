import React, { useState, useEffect } from "react";
import cn from "../components/privacyPolicy.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function PrivacyPolicy() {
  return (
    <>
      {/* 品種一覧 */}
      <section className={`${cn.privacyPolicy} sectionSpaceM mar-b4 sec-c`}>
        <div className={`tex-c`}>
          <div className={`mar-t2`}>
            <h5 className={`fon5`}>プライバシーポリシー</h5>
            <h1 className={`fon2 fonSp2 bold`}>Privacy Policy</h1>
          </div>
        </div>

        <div className={`${cn.privText} grid4`}>
          <p className={`fon4 lin-9`}>
            ROSETIQUE
            JAPAN（以下,「当社」といいます。）は,本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における,ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下,「本ポリシー」といいます。）を定めます。本ポリシーは,当社がどのような個人情報を取得し,どのように利用・共有するか,ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>1.事業者情報</span>
            <br />
            法人名:ROSETIQUE JAPAN Inc. <br />
            住所:東京都世田谷区等々力8-12-31F <br />
            代表者:堺美和子(要確認)
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>2.個人情報の取得方法</span>
            <br />
            当社はユーザーが利用登録をするとき,氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。
            お問い合わせフォームやコメントの送信時には,氏名・電話番号・メールアドレスを取得させていただきます。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>3.個人情報の利用目的</span>
            <br />
            取得した閲覧・購買履歴等の情報を分析し,ユーザー別に適した商品・サービスをお知らせするために利用します。また,取得した閲覧・購買履歴等の情報は,結果をスコア化した上で当該スコアを第三者へ提供します。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>
              4.個人データを安全に管理するための措置
            </span>
            <br />
            当社は個人情報を正確かつ最新の内容に保つよう努め,不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また,個人情報保護規程を設け,現場での管理についても定期的に点検を行っています。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>5.個人データの共同利用</span>
            <br />
            当社は,以下のとおり共同利用を行います。
            <br />
            ・ 個人データの管理に関する責任者 : ROSETIQUE JAPAN Inc.
            <br />
            ・ 共同して利用する者の利用目的 : 上記「利用目的」の内容と同様。
            <br />
            ・ 利用項目 : 氏名,メールアドレス,電話番号
            <br />
            ・ 共同して利用する者の範囲 当社企業グループを構成する企業
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>
              6.個人データの第三者提供について
            </span>
            <br />
            当社は法令及びガイドラインに別段の定めがある場合を除き,同意を得ないで第三者に個人情報を提供することは致しません。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>7.保有個人データの開示,訂正</span>
            <br />
            当社は本人から個人情報の開示を求められたときには,遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正,追加,削除,利用の停止,第三者への提供の停止を希望される方は以下の手順でご請求ください。
            <br />
            （各社請求方法を指定） 送付先住所 〒○○ 東京都○○
            株式会社○○　お問い合わせ窓口
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>
              8.個人情報取り扱いに関する相談や苦情の連絡先
            </span>
            <br />
            当社の個人情報の取り扱いに関するご質問やご不明点,苦情,その他のお問い合わせはお問い合わせフォームよりご連絡ください。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>
              9.SSL（Secure Socket Layer）について
            </span>
            <br />
            当社のWebサイトはSSLに対応しており,WebブラウザとWebサーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所,電話番号などの個人情報は自動的に暗号化されます。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>10.cookieについて</span>
            <br />
            cookieとは,WebサーバーからWebブラウザに送信されるデータのことです。Webサーバーがcookieを参照することでユーザーのパソコンを識別でき,効率的に当社Webサイトを利用することができます。当社Webサイトがcookieとして送るファイルは,個人を特定するような情報は含んでおりません。お使いのWebブラウザの設定により,cookieを無効にすることも可能です。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>
              11.プライバシーポリシーの制定日及び改定日
            </span>
            <br />
            制定 : 2023年1月26日
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>12.免責事項</span>
            <br />
            当社Webサイトに掲載されている情報の正確性には万全を期していますが,利用者が当社Webサイトの情報を用いて行う一切の行為に関して,一切の責任を負わないものとします。
            当社は,利用者が当社Webサイトを利用したことにより生じた利用者の損害及び利用者が第三者に与えた損害に関して,一切の責任を負わないものとします。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>13.著作権・肖像権</span>
            <br />
            当社Webサイト内の文章や画像,すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。
            <br />
            <br />
            <br />
            <span className={`fon3 fonSp3 `}>14.リンク</span>
            <br />
            当社Webサイトへのリンクは,自由に設置していただいて構いません。ただし,Webサイトの内容等によってはリンクの設置をお断りすることがあります。
          </p>
        </div>
      </section>
    </>
  );
}
