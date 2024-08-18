export interface User {
  name?: string;
  address?: string;
  password?: string;
  role: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserTask {
  twitterUsername: string;
  telegramId: string;
  twitterId: string;
  discordId: string;
}
export interface IVerifyTask {
  joinChannelTelegram: boolean;
  joinVibxDiscord: boolean;
  joinTwitter: boolean;
}

export interface IBodyLoginSocial {
  address: string;
  typeSocial: string;
}

export enum SocialEnum {
  TWITTER = "twitter",
  DISCORD = "discord",
  TELE = "telegram",
}

export enum STATUS_CARD {
  DISABLE = "DISABLE",
  FOLLOW = "FOLLOW",
  VERIFY = "VERIFY",
}
