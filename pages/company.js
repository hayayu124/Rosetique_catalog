import React, { useState, useEffect } from "react";
import cn from "../components/company.module.scss";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function Company() {
  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  return (
    <>
      {/* 品種一覧 */}
      <section className={`${cn.company} sectionSpaceM mar-b4 sec-c`}>
        <div className={`titleColumn tex-c mar-b4`}>
          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
            <h5 className={`fon5 fonSp5 mar-b1`}>会社概要</h5>

            <h2 className={`fon2 fonSp2 bold mar-b05`}>Company</h2>

            <div className={`titleBorder sec-c`}></div>
          </ScrollEffect>
        </div>

        <ScrollEffect className={`intMostDelay`} after={`intActive`}>
          <div
            className={`${cn.companyColumn} collectionColumn sectionSpaceM tex-L grid4 sec-c`}
          >
            <div className={`collectionName`}>
              <h3 className={`fon3 fonSp3 bold`}>株式会社ROSETIQUE JAPAN</h3>
              <h5 className={`fon5 fonSp5 mar-t2 lin-22`}>
                日本を代表する育種家今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップとしての役割を担います。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。
              </h5>
            </div>

            <div className={`collectionName sectionSpaceS`}>
              <h3 className={`fon3 fonSp3 mar-t2 lin-22 bold`}>
                品種にかかる法律(種苗法)/生産にかかる特許について
              </h3>
              <h5 className={`fon5 fonSp5 mar-t2 lin-22`}>
                当ホームページはお客様への情報、通信販売サービスとして運営されております。お客様が当ホームページをご利用される場合、お客様の個人情報をお伺いする場合があります。（通信販売等のお客様の任意かつ自主的にご利用いただく場合）お伺いする情報は、お客様のお名前、メールアドレス、電話番号、住所といった、(有)はなぞの野呂高原今井ナーセリーのサービスをご利用になる際に必要となる、お客様の個人情報が主なものになります。
                <br className="br" />
                また、お客様の必要に即したサービスに関する情報のご提供等の目的で、
                それ以外の質問をさせていただく場合がありますが、
                これは必要最低限の項目を除いて、お客様自身が選択可能なものになっており、お客様の任意でご提供いただけるものです。
                <br className="br" />
                お伺いした情報は契約違反、販売後の遵守違反で第三者に通知する場合があることをあらかじめご了承ください。（例えば、種苗法違反や、質問状、訴訟のため、または配送等のサービスを委託した会社に、お客様の名前と宛先を知らせる場合がこれにあたります）
                <br className="br" />
                (有)はなぞの野呂高原今井ナーセリーは当社ホームページを訪問されたお客様のプライバシーを守るために合理的な範囲で必要な措置をとります。当社は以上の方針を改定することがあります。
                その場合すべての改定はこのホームページで通知いたします。保証及び責任制限(有)はなぞの野呂高原今井ナーセリーのホームページの利用は、お客様の責任において行われるものとします。当社ホームページ及び当ホームページにリンクが設定されている他のウェブサイトから取得された
                各種情報の利用によって生じたあらゆる損害に関して、当社は一切の責任を負いません。
                <br className="br" />
                <br />
                準拠法
                <br className="br" />
                このホームページは(有)はなぞの野呂高原今井ナーセリーの管理下にあります。当サイトは法律の異なる全世界の国々からアクセスすることが可能ですが、当サイトにアクセスされたお客様および今井ナーセリーの両者は、かかる法律原理の違いに関わらず、当サイトの利用に関して日本国の法律に拘束されることに同意するものとします。
                また今井ナーセリーは当サイト上で、お客様の環境において当サイトのコンテンツが適切であるかなどの記述や表示は一切行いません。
                当サイトへのアクセスはお客様の自由意志によるものとし、当サイトの利用に関しての責任はお客様にあるものとします。
                品種にかかる法律(種苗法)について
                生産者様譲渡したお客さまは、種苗法に遵守した契約をお願いいただきます。自家増殖については、当社では、報告後の自家増殖を認めております。ご相談ください。
                <br className="br" />
                <br />
                一般消費者様
                <br className="br" />
                当社または契約農家・契約販売店から購入後の転売は堅く禁止させていただきます。また、種苗法に遵守した取り扱いをお願いしております。違反されたお客さまは、今後の取引をお断りします。状況により賠償も請求させていただきます。自家増殖については、販売をされない(寄付・プレゼント目的)ことのみ供託いたします。
                <br className="br" />
                <br />
                生産にかかる特許について生産者様
                <br />
                当社の栽培方法には、台木を使用した折り曲げ法栽培の特許を取得しており、現在レべリング法という特許も申請しております。
                苗生産から、栽培までかかっております。供託なく、行うことは出来ません。無断で栽培法を使用している生産者を発見された場合、お知らせください。
              </h5>
            </div>
          </div>
        </ScrollEffect>
      </section>
    </>
  );
}
