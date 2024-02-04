'use client';
import { Tooltip } from 'react-tooltip';
import { useGameSelect } from '@/store/gameSelectStore';

interface gameData {
  mode: string;
  href: string;
}

const GameModeClassic = ({ data }: any) => {
  const { classicSelect, setClassicSelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setClassicSelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Classic' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === classicSelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item.mode}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

const GameModeQuote = ({ data }: any) => {
  const { quoteSelect, setQuoteSelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setQuoteSelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Quote' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === quoteSelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item.mode}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

const GameModeAbility = ({ data }: any) => {
  const { abilitySelect, setAbilitySelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setAbilitySelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Ability' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === abilitySelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

const GameModeEmoji = ({ data }: any) => {
  const { emojiSelect, setEmojiSelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setEmojiSelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Emoji' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === emojiSelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item.mode}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

const GameModePlayer = ({ data }: any) => {
  const { playerSelect, setPlayerSelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setPlayerSelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Pro Player' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === playerSelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item.mode}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

const GameModeSplash = ({ data }: any) => {
  const { splashSelect, setSplashSelect } = useGameSelect();

  if (data) {
    return (
      <span className="absolute z-40 text-sm top-5 right-5 flex gap-3">
        {data.map((item: any) => (
          <span
            onClick={() => setSplashSelect(item)}
            data-tooltip-id={`${item.mode}-option`}
            data-tooltip-content={item.mode === 'Splash' ? 'Daily Mode' : 'Rush Mode'}
            key={`${item.mode}-option`}
            className={`${item.mode === splashSelect.mode ? 'bg-primary w-8' : 'bg-gray-300 opacity-70 w-4'} h-3 rounded-full transition-all ease-in-out duration-200`}
          >
            <Tooltip id={`${item.mode}-option`} />
          </span>
        ))}
      </span>
    );
  }
  return;
};

export { GameModeClassic, GameModeAbility, GameModeEmoji, GameModePlayer, GameModeQuote, GameModeSplash };
