export type QuotationResponse = {
  Status: string;
  Data: TQuotation[];
};

export type TQuotation = {
  Slug: string;
  Category: string;
  Content: string;
  Number: number;
};

export type TCounter = {
  Category: string;
  Count: number;
};

export type CounterResponse = {
  Status: string;
  Data: TCounter[];
};
