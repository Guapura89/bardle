'use client';
import Head from 'next/head';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { TiGroup, TiFlash } from 'react-icons/ti';
import { FaQuoteLeft, FaFire, FaPaintBrush } from 'react-icons/fa';
import { MainLayout } from '@/components/Layout';
import {
  GameModeClassic,
  GameModeAbility,
  GameModeEmoji,
  GameModePlayer,
  GameModeSplash,
  GameModeQuote,
} from '@/components/GameModeSelect';
import { useGameSelect } from '@/store/gameSelectStore';
import { ReactElement } from 'react';

function Home() {
  const { classicSelect, quoteSelect, abilitySelect, playerSelect, emojiSelect, splashSelect } = useGameSelect();

  return (
    <>
      <Head>
        <title>Bardle</title>
        <meta
          name="description"
          content="Bardle Official"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div>
        <div className="grid grid-cols-12 lg:grid-cols-8 2xl:grid-cols-6 w-full mt-[3vh]">
          <div className="2xl:h-[95%] grid-cols-2 col-start-2 col-span-10 lg:col-span-6 lg:col-start-2 2xl:col-start-2 2xl:col-span-4">
            <div className="h-full grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-4 lg:grid-rows-5 xl:grid-cols-4 xl:grid-rows-5 2xl:grid-rows-6 2xl:grid-cols-4 gap-3 mx-10">
              {/* Classic card */}
              <div
                className={`h-full relative ${
                  classicSelect.mode === 'Classic' ? 'classicBack' : 'classicBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out col-start-1 md:col-start-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 xl:col-span-2 xl:col-start-1 xl:row-start-1 xl:row-span-2 2xl:col-span-2 2xl:col-start-1 2xl:row-start-1 2xl:row-span-2 text-xl 2xl:text-4xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:cursor-pointer menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -140px 95px -46px black' }}
              >
                <GameModeClassic
                  data={[
                    { mode: 'Classic', href: '/daily' },
                    { mode: 'Classic Rush', href: '/rush/classic' },
                  ]}
                />
                <button className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 p-5 lg:p-10 2xl:py-8 flex flex-col justify-center 2xl:justify-end lg:justify-end items-start">
                  <span className="flex gap-2">
                    <TiFlash size={35} />
                    <span>Classic</span>
                    {classicSelect.mode !== 'Classic' ? (
                      <span
                        data-tooltip-id={'ClassicRush-option'}
                        data-tooltip-content={'Rush mode enabled.'}
                        className="text-xs border-2 border-primary text-primary px-3 my-1 ml-2 flex items-center rounded-full"
                      >
                        <Tooltip id={'ClassicRush-option'} />
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </button>
              </div>

              {/* Quote card */}
              <div
                className={`h-full relative ${
                  quoteSelect.mode === 'Quote' ? 'quoteBack' : 'quoteBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out col-start-1 lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:row-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-3 xl:row-span-2 2xl:row-start-3 2xl:row-span-1 2xl:col-span-2 2xl:col-start-1 text-xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:cursor-pointer hover:opacity-90 menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -120px 95px -46px black' }}
              >
                <GameModeQuote
                  data={[
                    { mode: 'Quote', href: '/daily/quote' },
                    { mode: 'Quote Rush', href: '/rush/quote' },
                  ]}
                />
                <button className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 p-5 lg:p-10 flex flex-col justify-center 2xl:justify-end lg:justify-end items-start">
                  <span className="flex gap-3 items-center">
                    <FaQuoteLeft size={20} />
                    <span>Quote</span>
                    {quoteSelect.mode !== 'Quote' ? (
                      <span className="text-xs border-2 border-primary text-primary px-3 my-1 flex items-center rounded-full">
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </button>
              </div>

              <Link
                href="/"
                className="rounded-xl hover:scale-102 transition-all ease-out h-full flex justify-center 2xl:justify-start lg:justify-start p-5 lg:p-10 row-start-7 col-start-1 md:col-start-1 md:col-span-2 md:row-span-1 md:row-start-6 lg:col-span-4 lg:col-start-1 lg:row-start-7 lg:row-span-1 xl:col-span-2 xl:col-start-1 xl:row-start-5 xl:row-span-2 2xl:row-start-4 2xl:row-span-2 2xl:py-10 text-2xl font-bold text-white bg-gray-700 dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:cursor-pointer backdrop-grayscale menu-box socialsBack items-end border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6"
                style={{ boxShadow: 'inset -1px -120px 95px -46px black' }}
              >
                <div className="flex gap-3">
                  {/* <RiArrowLeftLine size={30} /> */}
                  <p className="p-0 my-auto">Get in touch!</p>
                </div>
              </Link>

              {/* Middle col */}

              {/* Ability card */}
              <div
                className={`h-full relative ${
                  abilitySelect.mode === 'Ability' ? 'abilityBack' : 'abilityBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out lg:col-span-2 lg:col-start-1 lg:row-start-5 lg:row-span-2 xl:col-span-1 xl:row-start-3 xl:row-span-2 xl:col-start-2 2xl:row-start-1 2xl:row-span-2 2xl:col-span-1 2xl:col-start-3 text-xl 2xl:text-2xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:opacity-90 hover:cursor-pointer menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -160px 95px -46px black' }}
              >
                <GameModeAbility
                  data={[
                    { mode: 'Ability', href: '/daily/ability' },
                    { mode: 'Ability Rush', href: '/rush/ability' },
                  ]}
                />
                <button className="rounded-xl h-full w-full p-5 hover:backdrop-brightness-150 transition-all ease-in duration-150 lg:p-8 2xl:py-8 flex flex-col justify-center 2xl:justify-end lg:justify-end items-start">
                  <span className="flex gap-1 2xl:mb-4 items-center">
                    <FaFire size={30} />
                    <span>Ability</span>
                    {abilitySelect.mode !== 'Ability' ? (
                      <span className="text-xs border-2 border-primary text-primary px-3 my-1 ml-2 flex items-center rounded-full">
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </button>
              </div>

              {/* Emoji card */}
              <div
                className={`h-full relative ${
                  emojiSelect.mode === 'Emoji' ? 'emojiBack' : 'emojiBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out md:col-start-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-3 lg:row-span-2 xl:col-span-2 xl:col-start-3 xl:row-start-5 xl:row-span-2 2xl:row-start-3 2xl:row-span-3 2xl:col-span-1 text-xl 2xl:text-2xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:cursor-pointer menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -160px 95px -46px black' }}
              >
                <GameModeEmoji
                  data={[
                    { mode: 'Emoji', href: '/daily/emoji' },
                    { mode: 'Emoji Rush', href: '/rush/emoji' },
                  ]}
                />
                <button className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 flex flex-col justify-center 2xl:justify-end lg:justify-end items-start p-5 lg:p-8 2xl:py-8">
                  <span className="flex gap-3 2xl:mb-4 items-center">
                    <MdOutlineEmojiEmotions size={30} />
                    <span>Emoji</span>
                    {emojiSelect.mode !== 'Emoji' ? (
                      <span className="text-xs border-2 border-primary text-primary px-3 my-1 ml-1 flex items-center rounded-full">
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </button>
              </div>

              {/* Right col */}

              {/* Players card */}
              <div
                className={`h-full ${
                  playerSelect.mode === 'Pro Player' ? 'playersBack' : 'playersBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out relative row-start-2 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:row-span-2 xl:col-span-2 xl:col-start-3 xl:row-start-1 xl:row-span-2 2xl:row-start-1 2xl:col-start-4 2xl:row-span-2 2xl:col-span-1 text-xl 2xl:text-2xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 disabled:opacity-40 hover:cursor-pointer hover:opacity-90 menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -160px 95px -46px black' }}
              >
                <GameModePlayer
                  data={[
                    { mode: 'Pro Player', href: '/daily/players' },
                    { mode: 'Pro Player Rush', href: '/rush/players' },
                  ]}
                />
                <button className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 flex flex-col justify-center 2xl:justify-end lg:justify-end items-start p-5 lg:p-8 2xl:py-8s">
                  <div className="flex gap-2 2xl:mb-4 text-start items-center">
                    <TiGroup size={30} />
                    <span>Pro Player</span>
                    {playerSelect.mode !== 'Pro Player' ? (
                      <span className="text-xs border-2 border-primary text-primary px-3 my-1 flex items-center rounded-full">
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </button>
              </div>

              {/* Splash card */}
              <div
                className={`h-full ${
                  splashSelect.mode === 'Splash' ? 'splashBack' : 'splashBackRush'
                } rounded-xl hover:scale-102 transition-all ease-out relative row-start-6 md:col-start-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-5 lg:row-span-2 xl:col-span-2 xl:col-start-3 xl:row-start-3 xl:row-span-2 2xl:row-start-3 2xl:col-start-4 2xl:col-span-1 2xl:row-span-3 text-xl 2xl:text-2xl font-bold text-white bg-white dark:bg-gray-700 dark:text-white dark:hover:text-gray-300 hover:opacity-90 hover:cursor-pointer group menu-box border-2 border-light hover:border-dark dark:border-dark dark:hover:border-accent-6`}
                style={{ boxShadow: 'inset -1px -160px 95px -46px black' }}
              >
                <GameModeSplash
                  data={[
                    { mode: 'Splash', href: '/daily/splash' },
                    { mode: 'Splash Rush', href: '/rush/splash' },
                  ]}
                />
                <button className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 flex flex-col justify-center 2xl:justify-end 2xl:py-8 lg:justify-end items-start p-5 lg:p-10">
                  <span className="flex gap-3 items-center 2xl:mb-4">
                    <FaPaintBrush size={25} />
                    <span>Splash</span>
                    {splashSelect.mode !== 'Splash' ? (
                      <span className="text-xs border-2 border-primary text-primary px-3 my-1 flex items-center rounded-full">
                        Rush
                      </span>
                    ) : (
                      <></>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
