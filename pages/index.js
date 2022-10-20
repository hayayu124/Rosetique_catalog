import React, { useState, useEffect, useRef } from "react";
import cn from "../components/toppage.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ロードモバイル</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https: //fonts.googleapis.com/css2? family=アルカラミ&family= Arbutus+Slab &family= Zen+Kaku+Gothic+New:wght@700 & display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={`${cn.wrapper}`}>
        {/* KV */}
        <div className={`${cn.kv}`}></div>

        {/*コピーセクション*/}
        <div className={cn.copyPattern}>
          <img src="/img/copyPattern.png" alt="" />
        </div>

        <div className={cn.copyPatternSP}>
          <img src="/img/copyPatternSP.png" alt="" />
        </div>

        <section className={cn.copy + " " + "grid1"}>
          <div className={cn.copyText}>
            <div className={cn.copySubTittle}>
              <img src="/img/copySubTittle.png" alt="" />
            </div>

            <h2>あなたの活躍で</h2>
            <h1>優勝チームが決まる！</h1>

            <div className={cn.copyBorder}>
              <img src="/img/copyBorder.png" alt="" />
            </div>

            <div className={cn.copyImage}>
              <img src="/img/copyImage.png" alt="" />
            </div>
          </div>
        </section>

        {/* チームセクション*/}
        <section className={cn.team}>
          <div className={cn.teamDecoration}>
            <img src="/img/TEAM.png" alt="" />
          </div>

          <div className={cn.teamDecorationCircle}>
            <img src="/img/team_circle.png" alt="" />
          </div>

          <div className={cn.teamTittle}>
            <h1>
              推しチームのギルドに入り、
              <br />
              仲間と協力して勝利を掴み取れ！
            </h1>

            <div className={cn.teamDecorationBorder}>
              <img src="/img/team_border.png" alt="" />
            </div>
          </div>

          {/* チームA*/}
          <div className={cn.teamDetail}>
            <div className={cn.teamAOverview + " " + "grid3"}>
              <img src="/img/teamA.png" alt="" />
              <h4>
                Takaki Yuumi / Suzumoto Riona /<br className={`brSp`} />
                Oozora Riko / Arimura Minami
              </h4>
            </div>

            <div className={cn.teamMember + " " + "grid1"}>
              {/* メンバー1*/}
              <div className={`${cn.teamMemberDetail} ${cn.red}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-涼本.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>涼本 理央那</h2>
                    {/* twitterリンク */}
                    <a href="https://twitter.com/riona_suzumoto">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Suzumoto Riona
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Suzumoto Riona A</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : srA</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:479 Y:948</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/bbwKy1">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* メンバー2*/}
              <div className={`${cn.teamMemberDetail} ${cn.roseRed}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-高木.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>髙木 悠美</h2>

                    {/* twitterリンク */}
                    <a href="https://twitter.com/yuumi_takaki">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Takaki Yuumi
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Takaki Yuumi A</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : tyA</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:437 Y:402</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/R6oAie">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* メンバー3*/}
              <div className={`${cn.teamMemberDetail} ${cn.turquoise}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-有村.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>有村 南海</h2>

                    {/* twitterリンク */}
                    <a href="https://twitter.com/arimura_minami">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Arimura Minami
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Arimura Minami A</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : amA</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:67 Y:166</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/nm3Ftd">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* メンバー4*/}
              <div className={`${cn.teamMemberDetail} ${cn.orange}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-大空.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>大空 莉子</h2>

                    {/* twitterリンク */}
                    <a href="https://twitter.com/oozora_riko">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Oozora Riko
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Oozora Riko A</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : orA</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:442 Y:995</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/VgS0BT">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* チームB*/}
          <div className={cn.teamDetail}>
            <div className={cn.teamAOverview + " " + "grid4"}>
              <img src="/img/teamB.png" alt="" />
              <h4>Kaizuki Rana / Kaneko Miyu / Kuroda Rei</h4>
            </div>

            <div className={cn.teamMember + " " + "grid1"}>
              {/* メンバー5*/}
              <div className={`${cn.teamMemberDetail} ${cn.green}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-海月.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>海月 らな</h2>
                    {/* twitterリンク */}
                    <a href="https://twitter.com/rana_kaizuki">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Kaizuki Rana
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Kaizuki Rana B</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : krB</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:418 Y:875</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/IjAWuK">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* メンバー6*/}
              <div className={`${cn.teamMemberDetail} ${cn.blue}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-金子.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>金子 みゆ</h2>

                    {/* twitterリンク */}
                    <a href="https://twitter.com/kaneko_miyu">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Kaneko Miyu
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Kaneko Miyu B</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : kmB</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:160 Y:779</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/eMx0Tn">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* メンバー7*/}
              <div className={`${cn.teamMemberDetail} ${cn.yellow}`}>
                <div className={cn.teamMemberContents}>
                  <img src="/img/LinQ_645-黒田.png" alt="" />

                  <div className={`${cn.memberName} mar-t2`}>
                    <h2 className={cn.foncol}>黒田 れい</h2>

                    {/* twitterリンク */}
                    <a href="https://twitter.com/kuroda_rei_1112">
                      <div className={cn.twitterIcon}>
                        <img src="/img/2021 Twitter logo - white.png" alt="" />
                      </div>
                    </a>
                  </div>
                  <h4 className={`${cn.foncol} ${cn.memberSubName} mar-b2`}>
                    Kuroda Rei
                  </h4>

                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルド名 : Kuroda Rei B</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>ギルドタグ : krB</h5>
                  </div>
                  <div className={`${cn.teamMemberguildInfo}`}>
                    <h5 className={cn.foncol}>座標 : K:1020 X:302 Y:970</h5>
                  </div>

                  <div className={`${cn.button} mar-t1`}>
                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://g.igg.com/5GFm8k">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>アプリをダウンロード</h6>
                        </div>
                      </a>
                    </div>

                    <div className={`${cn.buttonWidth}`}>
                      {/*アプリのダウンロードリンク */}
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWquvAICj5FWBFYjjjsxiFTIIrZRoE2fhGmfAydyuuronuJA/viewform">
                        <div className={`${cn.buttonContets}`}>
                          <h6 className={cn.foncol}>ギルドに参加</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*特典*/}
        <section className={`${cn.reward}`}>
          <div className={cn.rewardDecoration}>
            <img src="/img/reward.png" alt="" />
          </div>

          <div className={cn.teamTittle}>
            <h1>
              優勝チーム・イベント上位者には
              <br className={`br`} />
              豪華特典が目白押し！
            </h1>
          </div>

          <div className={cn.rewardDecorationCircle}>
            <img src="/img/2circle.png" alt="" />
          </div>

          <div className={`${cn.teamRewardContents} grid4`}>
            <div className={`${cn.rewardSectionHukidashi}`}>
              <img src="/img/hukidasi_1.png" alt="" />
            </div>
            <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
              <h4>
                優勝チームメンバーは広告モデルとして、
                <br className={`br`} />
                交通広告にてビジュアル掲載！！
              </h4>
            </div>
          </div>

          <div className={`${cn.eventRewardSection}`}>
            <div className={`${cn.rewardSectionTittle}`}>
              <img src="/img/rewardSectionTittle.png" alt="" />
            </div>

            <div className={cn.eventRewardDecoration}>
              <img src="/img/eventRewardPic_1.png" alt="" />
            </div>

            <div className={cn.eventRewardDecoration_2}>
              <img src="/img/2square.png" alt="" />
            </div>

            <h4 className={`${cn.rewardSectionText}`}>
              イベント上位の参加者も
              <br className={`brSp`} />
              豪華プレゼントがもらえる！
            </h4>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            <div className={`${cn.rewardSectionHukidashi}`}>
              <img src="/img/hukidasi_2.png" alt="" />
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
              <h4 className={`${cn.rewardSectionSubTittle}`}>
                ジョブネット主催・LinQワンマンライブ優先入場券※＋サイン入りチェキ
                <br className={`br}`} />
                or
                <br className={`br}`} />
                LinQメンバー全員からのメッセージ動画＋名前・サイン入りチェキ
                <br className={`br}`} />
                の2つより特典を選べる！
              </h4>
            </div>

            <h6>
              ※ 特別公演は除きます。
              <br className={`brSp`} />
              チケットは別途必要になります。
            </h6>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            <div className={`${cn.rewardSectionHukidashi}`}>
              <img src="/img/hukidasi_3.png" alt="" />
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
              <h4 className={`${cn.rewardSectionSubTittle} `}>
                参加ギルドのLinQメンバーのチーム全員のメッセージ付きデジショ
                <br />
                ＋名前・サイン入りチェキ
              </h4>
            </div>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            <div className={`${cn.rewardSectionHukidashi}`}>
              <img src="/img/hukidasi_4.png" alt="" />
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
              <h4 className={`${cn.rewardSectionSubTittle}`}>
                参加ギルドのLinQメンバーからメッセージ付きデジショ＋
                <br />
                名前・サイン入りチェキ
              </h4>
            </div>
          </div>

          <div className={`${cn.rewardColumn} tex-c  grid4`}>
            <div className={`${cn.rewardSectionHukidashi}`}>
              <img src="/img/hukidasi_5.png" alt="" />
            </div>

            {/* 各メンバーギルド内パワーランキング１位〜５位*/}
            <div className={`${cn.systemDetail} ${cn.rewardSquare}`}>
              <h4 className={`${cn.rewardSectionSubTittle} `}>
                名前・サイン入りチェキ
              </h4>
            </div>
          </div>
        </section>

        {/* イベント参加セクション*/}
        <section className={`${cn.join} tex-c`}>
          <div className={`${cn.joinTittle}`}>
            <div className={cn.teamDecoration}>
              <img src="/img/JOIN.png" alt="" />
            </div>

            <div className={cn.tittleImage}>
              <img src="/img/joinImage.png" alt="" />
            </div>

            <h1>イベント参加の流れ</h1>
          </div>

          {/*参加手順*/}
          <div className={`${cn.joinColumn} grid3 tex-l`}>
            {/* 手順1*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage1.png" alt="" />
              </div>

              <h3>① ダウンロード</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                応援したいメンバーのダウンロードページからロードモバイルをダウンロード！
                イベントには参加条件があります。
                ページ下部の禁止事項をご確認ください。
              </h5>
            </div>

            {/* 手順2*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage2.png" alt="" />
              </div>

              <h3>② コロニーに移動</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                城レベル５以下でしか使用できない「初心者転
                送の巻物」を使い、自分の城をギルドのメンバ
                ーが集まるコロニーに移動！※
              </h5>
            </div>

            {/* 手順3*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage3.png" alt="" />
              </div>

              <h3>③ ギルドへ申請</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                ダウンロード後「イベント参加者」に記載されているギルドタグでギルドを検索し、申請！※
              </h5>
            </div>
          </div>

          {/*参加手順4~6*/}
          <div className={`${cn.joinColumn} grid3 tex-l`}>
            {/* 手順4*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage4.png" alt="" />
              </div>

              <h3>④ 指定フォームにIGG IDを記入</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                申請後、ゲーム内でIGG
                IDを確認。その後イベント参加者に記載されている「ギルドへ加入」をタップし、情報を記入！
              </h5>
            </div>

            {/* 手順5*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage5.png" alt="" />
              </div>

              <h3>⑤ レベルアップ・ギルド人数</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                イベント最終週に行われるギルド共闘戦までに同じギルドの仲間と助け合って城レベルを15以上に到達させる！※
              </h5>
            </div>

            {/* 手順6*/}
            <div className={`${cn.joinColumnDetail} ${cn.join1}`}>
              <div className={`${cn.joinIcon}`}>
                <img src="/img/joinImage6.png" alt="" />
              </div>

              <h3>⑥ 順位決定</h3>

              <h5 className={`${cn.memberSubName} mar-b2`}>
                イベント最終週に行われるギルド共闘戦での獲
                得共闘ポイントと各ギルド内の総パワーポイン
                ト、ギルド内の城レベル別の加算ポイントの合計で順位が決定！
              </h5>
            </div>
          </div>

          <div className={`${cn.joinNotes} grid3 tex-l`}>
            <h6>
              ※「城レベル6以上」もしくは、ゲームを開始して2日間が経過すると「初心者転送の巻物」が使えなくなります。
              <br />
              ※他のギルドメンバーと別のコロニーでも、本企画への参加には問題ありません。
              <br />
              ※ギルドを作ってから３日間経過しても人数が１１人に足りない場合は強制解散されるリマインドメールが来ます。また、ギルドを作ってから５日間経過しても１１人に足りない場合はギルド強制解散されます。
              <br />
              ※１ギルドにつき１００名まで参加可能。
              <br />
              ※Apple製品をお使いの方はトラッキングを必ず許可してください。
              <br />
              ※ギルドへの参加の承認は運営が行います。土日の承認が遅れることがございますので、ご了承くださいませ。
              <br />
              ※25人以上のギルドが参加可能で、ギルド共闘開始時間までにギルドに加入した状態でないと参加できません。
              <br />
            </h6>
          </div>
        </section>

        {/* システムセクション*/}
        <section className={`${cn.system} tex-c`}>
          <div className={`${cn.joinTittle} ${cn.systemTittle} grid4`}>
            <h1>パワーポイントシステム</h1>
            <h4>
              推しのギルドに入り、仲間と協力して勝利を掴み取れ！
              <br className={`br`} />
              あなたの活躍次第で推しの優勝が決まる？
            </h4>

            <div className={cn.systemDecoration}>
              <img src="/img/systemImage.png" alt="" />
            </div>

            <div className={cn.systemImage}>
              <img src="/img/2circle_2.png" alt="" />
            </div>
          </div>

          {/* システム説明*/}
          <div className={`${cn.systemContents} grid4`}>
            <div className={`${cn.systemDetail} `}>
              <h4>
                イベント最終日のギルド総パワーポイントを特別ポイント換算したもの！
              </h4>
            </div>

            <div className={cn.plus}>
              <img src="/img/plus.png" alt="" />
            </div>

            <div className={`${cn.systemDetail} `}>
              <h4>イベント最終週のギルド共闘で獲得した総共闘ポイント</h4>
            </div>

            <div className={cn.plus}>
              <img src="/img/plus.png" alt="" />
            </div>

            <div className={`${cn.systemDetail} `}>
              <h4>
                イベント最終日のギルド内プレイヤーを城レベル別にポイント換算したもの！
              </h4>
            </div>

            {/* 総パワーポイントのシステム */}
            <div className={`${cn.entirePowerSystem}`}>
              <h2>総パワーポイントのシステム</h2>

              <div className={`${cn.systemDetail}`}>
                <h4>100,000,000パワーごとに1,000Pt</h4>
              </div>
            </div>

            {/* 総パワーポイントのシステム */}
            <div className={`${cn.caslePointSystem}`}>
              <h2>城レベル別　ポイント加算制度</h2>

              <div className={`${cn.levelPointSystemColumn}`}>
                {/* 要素1*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv15＝100Pt</h4>
                </div>

                {/* 要素2*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv21＝1100Pt</h4>
                </div>

                {/* 要素3*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv16＝200Pt</h4>
                </div>

                {/* 要素4*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv22＝1200Pt</h4>
                </div>

                {/* 要素5*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv17＝300Pt</h4>
                </div>

                {/* 要素6*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv23＝1300Pt</h4>
                </div>

                {/* 要素7*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv18＝400Pt</h4>
                </div>

                {/* 要素8*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv24＝1400Pt</h4>
                </div>

                {/* 要素9*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv19＝500Pt</h4>
                </div>

                {/* 要素10*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv25＝3000Pt</h4>
                </div>

                {/* 要素11*/}
                <div className={`${cn.systemDetail} ${cn.levelPoint}`}>
                  <h4>城Lv20＝1000Pt</h4>
                </div>
              </div>
            </div>

            {/* ゲームの進め方に困ったら */}
            <div className={`${cn.helpSection}`}>
              <h1 className={`mar-b1`}>ゲームの進め方に困ったら</h1>
              <h4>
                ゲームを進めていて、
                <br />
                特に序盤はわからないことも出てくると思います。
                <br />
                そんな時はこちらのゲームガイドをご覧ください！
              </h4>

              {/*ゲームガイドボタン*/}
              <a href="https://lordsmobile.igg.com/project/guide_v2/?game_id=1051109903">
                <div className={`${cn.helpSectionButton}`}>
                  <h4>ゲームガイド</h4>
                </div>
              </a>

              <h4 className={`mar-t4`}>
                ギルド共闘について、下記に詳しい情報が載っています。
                <br />
                是非ご覧ください！
              </h4>

              {/*ギルド共闘ボタン*/}
              <a href="https://lords-mobile.gamerch.com/%E3%82%AE%E3%83%AB%E3%83%89%E5%85%B1%E9%97%98">
                <div className={`${cn.helpSectionButton}`}>
                  <h4>ギルド共闘について</h4>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 利用規約セクション*/}
        <section className={`${cn.terms}`}>
          <div className={`${cn.termsText} tex-l grid4`}>
            <h3>禁止事項</h3>
            <h6>
              ・メンバーへの直接の絡みやDMは禁止行為です。行った場合は運営の判断により『厳重注意』や『強制退室』の措置を取らせていただきます。
              <br />
              ・イベント運営以外がユーザーの承認を行うこと。
              <br />
              ・イベント最終週に行われるギルド共闘以外で、ユーザーのランクを４に昇格すること。
              <br />
              ※イベント最終週のギルド共闘では、ギルド共闘開始後、
              ギルドリーダーは任意で選んだ5名のユーザーをランク4に昇格可能です。
              <br />
              ・SNS、ギルド内チャット等にて、禁止行為を誘発する言動をすること。
              <br />
              ・SNS、ギルド内チャット等にて、特定の演者やユーザ
              ー、ギルドを侮辱、誹謗中傷する投稿。
              <br />
              ※悪質の場合、該当ギルドはペナルティを課すことや、失格となる可能性もございます。
              <br />
              ※アプリ内課金の返金対応はいたしかねます。
            </h6>

            <h3>利用規約</h3>
            <h6>
              運営や企画進行、メンバー様に関する内容はお答えできない場合もございますのであらかじめご了承ください。
              本イベントを主催、運営するイベント運営事務局（以下、「イベント運営」といいます）は、イベント運営が運営/管理するイベント（以下、「本イベント」といいま
              す）の運営にあたり、下記の各条項に定める事項については、免責されるものとします。
              本イベントにご参加のお客様（以下、「ユーザー」といいます）は、本免責事項の内容をご承諾頂いたものと見なしますので、ご了承ください。
              <br />
              １.イベント運営は、本イベントの内容、本イベントにより提供する一切の情報、データ等について、その完全性、正確性、適法性、目的適合性等いかなる保証も行わ
              ず、一切の責任を負いません。
              <br />
              ２.イベント運営は、イベント運営が本イベントにより提供する一切の情報、データ等、またはユーザーが掲載する一切の情報、データ等を確実に保存することを
              保証するものではなく、かかる情報、データ等が消失したとしても、一切の責任を負いません。
              <br />
              ３.本イベントの提供、遅滞、変更、中止もしくは廃止、本イベントを通じて登録、提供される情報等の流失もしくは消失等、およびその他本イベントに関連して発生
              したユーザーおよび第三者の損害について、イベント運営は一切の責任を負いません。
              <br />
              ４.本イベントへの参加に関連して、ユーザーが他のユーザーもしくは第三者に対して損害を与えた場合、またはユーザーが他のユーザーもしくは第三者と紛争を生じ
              た場合、当該ユーザーは自己の費用と責任で解決するものとし、イベント運営に何等の迷惑または損害を与えないものとします。また、ユーザーが本イベントの参加に
              関連してイベント運営に損害を生じさせた場合は、当該ユーザーはイベント運営に生じた損害を賠償するものとします。
              <br />
              ５.イベント運営は、本イベントに関連したサービスを提供するコンピューターシステムの稼働状況について保証するものではなく、本イベントに関連したサービス提
              供のためのコンピューターシステムの障害等、いかなる原因に基づき生じた損害についても、一切の責任を負いません。
              <br />
              ６.イベント運営は、本イベントに関連したサービスの利用、本サイトからのダウンロード、コンピュータウイルス感染等により、コンピュータ、周辺機器、回線、ソ
              フトウェアなどに生じた損害について、一切の責任を負いません。
              <br />
              ７.本規約に従いイベント運営がユーザーに対して損害賠償の責任を負う場合であっても、イベント運営に故意又は重過失が存する場合を除き、イベント運営が賠償す
              べき損害の範囲は、ユーザーに直接かつ現実的に生じた損害に限定されます。
            </h6>

            <h3>個人情報の取り扱いについて</h3>
            <h6>
              本イベントは、IGGが主体となり、イベント運営事務局が実施、運営と審査協力をするものです。
              又、ユーザーの個人情報をユーザーの同意なしに業務委託先、審査協力先以外の第三者に開示・提供することはございません。
              （法令等により開示を求められた場合を除く。）
            </h6>

            <h3>お問い合わせ</h3>
            <h6>
              本イベントに関するお問い合わせは下記までお願い致します。
              XXXX@gmail.com 受付対応時間/10時00分〜17時00分
              （土・日・祝日を除く）
              ※いただいたご質問によってはお答えできない場合もございます。
            </h6>
          </div>
        </section>

        {/* コピーライト*/}
        <div className={`${cn.termsText} tex-c grid4`}>
          <h4>®2022 IGG All Rights Reserved</h4>
        </div>
      </div>
    </>
  );
}