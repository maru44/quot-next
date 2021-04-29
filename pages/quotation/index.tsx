import { GetServerSideProps, NextPage } from "next";
import { TQuotation } from "../types/any";
import { baseUrl } from "../../utils/utils";
import { fetchAddQuotation } from "../../helper/Operation";

interface Props {
  quots: TQuotation[];
}

const Quotations: NextPage<Props> = (props) => {
  const initialQuots = props.quots;

  const postQuot = async (e: any) => {
    e.preventDefault();
    console.log(e.target.Category.value, e.target.Content.value);
    const ret = await fetchAddQuotation(
      e.target.Category.value,
      e.target.Content.value
    );
  };

  return (
    <div className="content mla mra">
      {initialQuots &&
        initialQuots.map((quot, index) => (
          <div key={index}>
            {quot.Category} {quot.Number} {quot.Slug} {quot.Content}
          </div>
        ))}
      <div className="mt60">
        <form onSubmit={postQuot}>
          <select name="Category">
            <option value="good">good</option>
          </select>
          <input type="text" name="Content" className="ml20" />
          <button type="submit" className="ml20">
            作成
          </button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`${baseUrl}/quotation/`);
  const ret = await res.json();

  const data = ret["Data"];
  return {
    props: {
      quots: data,
    },
  };
};

export default Quotations;
