import { NextPage } from "next";
import { baseUrl } from "../utils/utils";
import { useRouter } from "next/router";
import { fetchRandom, geneTwitterLink } from "../helper/Quotation";

const Base: NextPage = () => {
  const router = useRouter();
  const kujibiki = async (e: any) => {
    const ret = await fetchRandom(e.target.value);
    const slug = ret.Slug;
    const link = geneTwitterLink(slug);
    router.push(link);
  };

  return (
    <div className="content mla mra">
      <div className="">
        <h3>ボタンゾーン</h3>
        <div className="mt20 flexCen">
          <button className="" onClick={kujibiki} value="good">
            GOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Base;
