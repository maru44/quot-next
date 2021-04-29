import { baseUrl } from "../utils/utils";

interface tableItem {
  key: string;
  value: string;
}

export const fetchTableList = async () => {
  const res = await fetch(`${baseUrl}/db/list/`);
  const ret = await res.json();

  const tables: string[] = [];
  ret.data &&
    ret.data.forEach((r: tableItem) => {
      tables.push(r.value);
    });
  return tables;
};

export const fetchDeleteTable = async (tableName: string) => {
  const res = await fetch(`${baseUrl}/db/delete/?table=${tableName}`);
  const ret = await res.json();

  return ret;
};

export const fetchMakeQuotationTable = async () => {
  const res = await fetch(`${baseUrl}/db/make/quotation/`);
  const ret = await res.json();

  return ret;
};

export const fetchMakeCouterTable = async () => {
  const res = await fetch(`${baseUrl}/db/make/counter/`);
  const ret = await res.json();

  return ret;
};

export const fetchAddQuotation = async (category: string, content: string) => {
  const res = await fetch(`${baseUrl}/quotation/post`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ Category: category, Content: content }),
  });
  const ret = await res.json();

  return ret;
};
