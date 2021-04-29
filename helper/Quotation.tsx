import { baseUrl, frontUrl, twitterUrl } from "../utils/utils";
import { TQuotation, QuotationResponse } from "../types/any";

export const fetchRandom = async (cat: string): Promise<TQuotation> => {
  const res = await fetch(`${baseUrl}/quotation/random/?c=${cat}`);
  const ret: QuotationResponse = await res.json();

  const quot = ret.Data[0];
  return quot;
};

export const geneTwitterLink = (slug: string) => {
  const twitterLink = `${twitterUrl}${frontUrl}/quotation/${slug}`;
  return twitterLink;
};

export const CategoryDict = {
  good: "名言",
};
