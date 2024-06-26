import React, { useState, useRef, useEffect } from "react";
import cn from "../components/collectionColumn.module.scss";
import Button from "../components/button.js";
import ColorBox from "../components/colorBox.js";
// import FavButton from "./utility/utilityFavButton.js";

import ScrollEffect from "./utility/utilityscrollEffect";
import LoadingEffect from "./utility/loadingEffect";

export default function CollectionColumn({ roseCo, locale }) {
  //お気に入りのハートボタン
  // const [fav, setFav] = useState(false);
  // const [favList, setFavList] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("favItems", JSON.stringify(fav));
  // }, [fav]);

  return (
    <>
      <div
        className={`${cn.collectionColumn} ${
          roseCo.length == 0 ? cn.active : ""
        } sec-c`}
      >
        {/* 品種１ */}
        {roseCo.map((el, index) => {
          return (
            <div key={`collection${index}`} className={`${cn.flowerBreed}`}>
              {/* PC / SPの表示 */}
              <div className={`${cn.flowerBreedPc}`}>
                <div className={`${cn.flowerTitleColSp} tex-l mar-b2 fle-f`}>
                  <div className={`${cn.flowerTitle}`}>
                    <div className={`${cn.flowerSpecDetail}`}>
                      {el.node.colors.nodes.length !== 0 && (
                        <div className={`${cn.flowerColorBox}`}>
                          <ColorBox roseCo={el.node.colors} />
                        </div>
                      )}

                      {el.node.colors.nodes.length !== 0 && (
                        <h5 className={`${cn.flowerColorText} fonSp5`}>
                          {el.node.colors.nodes[0].name}
                        </h5>
                      )}
                    </div>
                    <div className={`${cn.flowerName}`}>
                      <h3 className={`fonSp2`}>
                        {locale === "ja"
                          ? el.node.rose_spec.roseName
                          : locale === "en"
                          ? el.node.rose_spec.roseNameen
                          : null}
                      </h3>
                      {el.node.rose_spec.roseSubname !== "" && (
                        <h6 className={`fonSp5`}>
                          {el.node.rose_spec.roseSubname}
                        </h6>
                      )}
                    </div>
                  </div>

                  <div className={`${cn.flowerAwardIcon}`}>
                    {el.node.rose_spec.award == "award2022" && (
                      <img src="/img/prize_2021_2022_color_E1.png" alt="" />
                    )}
                  </div>
                </div>
                <div className={`${cn.flowerDetailColumn}`}>
                  <div className={`${cn.flowerDetail} tex-l`}>
                    <div className={`${cn.flowerSpecColumn}`}>
                      <div className={`${cn.flowerTitleColPc} fle-f`}>
                        <div className={`${cn.flowerTitle}`}>
                          <div className={`${cn.flowerSpecDetail}`}>
                            {el.node.colors.nodes.length !== 0 && (
                              <div className={`${cn.flowerColorBox}`}>
                                <ColorBox roseCo={el.node.colors} />
                              </div>
                            )}
                            {el.node.colors.nodes.length !== 0 && (
                              <p className={`fon4 ${cn.colorName}`}>
                                {el.node.colors.nodes[0].name}
                              </p>
                            )}
                          </div>
                          <div className={`${cn.flowerName} mar-t01`}>
                            <h3 className={`fon3 bold`}>
                              {locale === "ja"
                                ? el.node.title
                                : locale === "en"
                                ? el.node.rose_spec.roseNameen
                                : null}
                            </h3>

                            {el.node.rose_spec.roseSubname !== "" && (
                              <p className={`fon5 fonSp5`}>
                                {el.node.rose_spec.roseSubname}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className={`${cn.flowerAwardIcon}`}>
                          {el.node.rose_spec.award == "award2022" && (
                            <img
                              src="/img/prize_2021_2022_color_E1.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>

                      <div className={`${cn.flowerSpec} fle-f mar-b2`}>
                        <div className={`${cn.specBorder}`}></div>
                        <div className={`${cn.flowerSpecDetailColumn}`}>
                          {el.node.rose_spec.roseColor !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Color&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {locale === "ja"
                                  ? el.node.rose_spec.roseColor
                                  : locale === "en"
                                  ? el.node.rose_spec.roseColoren
                                  : null}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.roseSize !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Size&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {locale === "ja"
                                  ? el.node.rose_spec.roseSize
                                  : locale === "en"
                                  ? el.node.rose_spec.roseSizeen
                                  : null}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.roseShape !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Shape&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {locale === "ja"
                                  ? el.node.rose_spec.roseShape
                                  : locale === "en"
                                  ? el.node.rose_spec.roseShapeen
                                  : null}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.roseScent !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Scent&emsp;&emsp;&emsp;&emsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {el.node.rose_spec.roseScent}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.rosePetal !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Petal&emsp;&emsp;&emsp;&emsp;&nbsp;
                                {el.node.rose_spec.rosePetal}
                                {locale === "ja"
                                  ? "本"
                                  : locale === "en"
                                  ? " petals"
                                  : null}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.roseLength !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Length&emsp;&emsp;&emsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {el.node.rose_spec.roseLength}
                              </p>
                            </div>
                          )}

                          {el.node.rose_spec.roseHarvest !== null && (
                            <div className={`${cn.flowerSpecDetail}`}>
                              <p className={`fon5 fonSp5`}>
                                Harvest&emsp;&emsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p className={`fon5 fonSp5`}>
                                {el.node.rose_spec.roseHarvest}
                                {locale === "ja"
                                  ? "本"
                                  : locale === "en"
                                  ? " petals"
                                  : null}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {el.node.rose_spec.roseExplanation !== null && (
                        <div className={`${cn.roseExplanation}`}>
                          <p className={`fon5 fonSp5`}>
                            {locale === "ja"
                              ? el.node.rose_spec.roseExplanation
                              : locale === "en"
                              ? el.node.rose_spec.roseExplanationen
                              : null}
                          </p>
                        </div>
                      )}

                      {/* お気に入りボタン */}
                      {/* <div className={`${cn.flowerSpecDetail} mar-t2`}>
                        <div className={`${cn.flowerSpecDetail}`}>
                          <FavButton
                            fav={fav}
                            favList={favList}
                            setFavList={setFavList}
                          />
                          <p className={`fon5 fonSp4`}>お気に入りに追加</p>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className={`${cn.flowerPicColumn}`}>
                    {el.node.rose_spec.imageSub !== null && (
                      <div className={`${cn.flowerPic1}`}>
                        <img
                          src={el.node.rose_spec.imageSub.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    )}

                    {el.node.featuredImage !== null && (
                      <div className={`${cn.flowerPic2}`}>
                        <img
                          src={el.node.featuredImage.node.mediaItemUrl}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
