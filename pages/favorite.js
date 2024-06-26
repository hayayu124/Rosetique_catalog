import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import cn from "../components/brandNew.module.scss";
import CollectionColumn from "../components/collectionColumn.js";
import Button from "../components/button.js";
import FButton from "../components/foldingButton.js";

import ScrollEffect from "../components/utility/utilityscrollEffect";
import LoadingEffect from "../components/utility/loadingEffect";

export default function BrandNew(props) {
  //テキスト
  const { locale } = useRouter();
  let text;
  if (locale == "ja") {
    text = require("../json/ja/page_favorite.json");
  } else if (locale == "en") {
    text = require("../json/en/page_favorite.json");
  }

  const favorite = props.formas;

  // ロード制御
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const body = document.body; //scroll制御
    body.classList.add("active");
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);

  //お気に入りに追加した品種の抽出
  const [favId, setFavId] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("id");
    if (storedItems) {
      setFavId(JSON.parse(storedItems));
      const fav = favorite.filter((n) => n.node.roseFormaId == favId[0]);
      setFavoriteItems(fav);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(favId));
  }, [favoriteItems]);

  //ボタンの変換
  const [folding, setFolding] = useState(false);
  const [view, setView] = useState(false);

  //More View
  // useEffect(() => {
  //   // このeffectは初回レンダー時のみ呼ばれるeffect
  //   isFirstRender.current = true;

  //   //項目が10個以上のときはボタンを表示
  //   if (number > 10) {
  //     setFolding(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     // 初回レンダー判定
  //     isFirstRender.current = false; // もう初回レンダーじゃないよ代入
  //   } else if (sliceNumber < number - 10) {
  //     setSliceNumber(sliceNumber + 10);
  //   } else if (sliceNumber >= number - 10) {
  //     setSliceNumber(sliceNumber + 10);
  //     setFolding(false);
  //   }
  // }, [moreView]);

  return (
    <>
      {/* コレクションページ */}

      <section className={`${cn.brandNew} collection sectionSpaceM`}>
        {/* 花の品種 */}
        <div className={`collectionColumn sectionSpaceM tex-c grid3 sec-c`}>
          <div className={`titleColumn tex-c mar-b4`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <h5 className={`fon5 fonSp5 mar-b1`}>
                {text.catchCopy.subTitle}
              </h5>

              <h2 className={`fon2 fonSp2 bold mar-b05`}>
                {text.catchCopy.title}
              </h2>

              <div className={`titleBorder sec-c`}></div>
            </ScrollEffect>
          </div>

          <ScrollEffect className={`intMostDelay`} after={`intActive`}>
            <CollectionColumn roseCo={favoriteItems} />
          </ScrollEffect>
        </div>

        {/* moreView */}
        <div
          onClick={() => {
            setMoreView((prevState) => !prevState);
          }}
          className={`moreView ${folding ? "" : "active"} sectionSpaceM`}
        >
          <Button />
        </div>

        <div
          className={`newsMessage ${
            favorite.length == 0 ? "active" : ""
          } tex-c`}
        >
          <h5>品種がありません。</h5>
        </div>
      </section>
    </>
  );
}

//wordpress
export const getStaticProps = async () => {
  //wordpressシダのデータ

  //バラの情報をインポート
  const roseFormas = await fetch(`http://ferntastique.tokyo/wp/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        roseFormas(first: 100) {
          edges {
            node {
              roseFormaId
              uri
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              rose_spec {
                award
                fieldGroupName
                roseColor
                roseShape
                roseSize
                imageSub {
                  mediaItemUrl
                }
                genre
                rosePetal
                roseScent
                roseName
                roseLength
                roseHarvest
                roseExplanation
                roseSubname
              }
              colors {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
      `,
    }),
  });

  const jsonRose = await roseFormas.json();
  return {
    props: {
      formas: jsonRose.data.roseFormas.edges,
    },
  };
};
