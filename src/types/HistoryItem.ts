interface IHistoryItem {
  Amount: number;
  Balance: number;
  CardID: string;
  ClientID: string;
  OperatorID: string;
  TransactionDate: string;
  TransactionID: number;
  TransactionMode: string;
  TransactionType: string;
}

export type HistoryItems = Array<IHistoryItem>;
