import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import {
  fetchDeleteTable,
  fetchMakeCouterTable,
  fetchMakeQuotationTable,
  fetchTableList,
} from "../../helper/Operation";
import { baseUrl } from "../../utils/utils";

interface tableItem {
  key: string;
  value: string;
}

interface Props {
  tables: string[];
}

const Operation: NextPage<Props> = (props) => {
  const [tables, setTables] = useState(props.tables);

  const deleteTable = async (e: any) => {
    const res = await fetchDeleteTable(e.target.value);
    const newTables = await fetchTableList();
    setTables(newTables);
  };

  const makeQuoStart = async () => {
    const res = await fetchMakeQuotationTable();
    const newTables = await fetchTableList();
    setTables(newTables);
  };

  const makeCounterStart = async () => {
    const res = await fetchMakeCouterTable();
    const newTables = await fetchTableList();
    setTables(newTables);
  };

  return (
    <div className="content mla mra">
      <div>
        {tables &&
          tables.map((table: string, index) => <div key={index}>{table}</div>)}
      </div>
      <h2 className="mt40">Delete</h2>
      <div>
        <button type="button" value="Counters" onClick={deleteTable}>
          Delete Counter
        </button>
      </div>
      <div className="mt40">
        <button type="button" value="Quotations" onClick={deleteTable}>
          Delete Quotations
        </button>
      </div>
      <h2 className="mt40">Make</h2>
      <div>
        <button type="button" onClick={makeCounterStart}>
          Make Counters
        </button>
      </div>
      <div className="mt40">
        <button type="button" onClick={makeQuoStart}>
          Make Quotations
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`${baseUrl}/db/list/`);
  const ret = await res.json();

  const tables: string[] = [];
  ret.data &&
    ret.data.forEach((r: tableItem) => {
      tables.push(r.value);
    });
  return {
    props: {
      tables: tables,
    },
  };
};

export default Operation;
