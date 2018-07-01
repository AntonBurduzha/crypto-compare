// @flow
export type Currency = {
  Algorithm: string,
  CoinName: string,
  FullName: string,
  FullyPremined: string,
  Id: string,
  ImageUrl: string,
  IsTrading: boolean,
  Name: string,
  PreMinedValue: string,
  ProofType: string,
  SortOrder: string,
  Sponsored: false,
  Symbol: string,
  TotalCoinSupply: string,
  TotalCoinsFreeFloat: string,
  Url: string,
};

export type CurrencySocketState = {
    CHANGE24HOUR: string,
    CHANGE24HOURPCT: string,
    FLAGS: string,
    FULLVOLUMEFROM: string,
    FULLVOLUMETO: string,
    HIGH24HOUR: string,
    HIGHHOUR: string,
    LASTMARKET: string,
    LASTTRADEID: string,
    LASTVOLUME: string,
    LASTVOLUMETO: string,
    LOW24HOUR: string,
    LOWHOUR: string,
    OPEN24HOUR: string,
    OPENHOUR: string,
    PRICE: string,
    VOLUME24HOUR: string,
    VOLUME24HOURTO: string,
    VOLUMEHOUR: string,
    VOLUMEHOURTO: string,
  };

  export type CurrencyChartItem = {
    PRICE: string,
    TIMESTAMP: string,
  };
