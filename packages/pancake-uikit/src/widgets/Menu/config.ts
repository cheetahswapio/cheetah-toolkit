import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.cheetahswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.cheetahswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",

  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
      },
      {
        label: "YourProfile",
        href: "/profile",
      },
    ],
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://cheetahswap.info",
      },
      {
        label: "Tokens",
        href: "https://cheetahswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://cheetahswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://cheetahswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.cheetahswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/cheetahswap",
      },
      {
        label: "Docs",
        href: "https://docs.cheetahswap.finance",
      },
      {
        label: "Blog",
        href: "https://cheetahswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/cheetahswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/CheetahSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/CheetahSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/CheetahSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/cheetahswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/cheetahswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/cheetahswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/CheetahSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/CheetahswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/cheetahswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/cheetahswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/CheetahSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/CheetahSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/cheetahswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 256;
export const SIDEBAR_WIDTH_REDUCED = 66;
export const NAVBAR_WIDTH_FULL = 250;
export const NAVBAR_WIDTH_REDUCED = 10;
export const NAV_WIDTH_REDUCED = 86;
export const NAV_WIDTH_FULL = 260;
