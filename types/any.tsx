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

/****  props  ****/
export type THead = {
  title?: string;
  ogtypeWebsite?: string;
  ogimage?: string;
  ogtitle?: string;
  ogdescription?: string;
  seodescription?: string;
};
