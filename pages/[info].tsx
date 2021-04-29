import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { baseUrl } from "../utils/utils";
import { TQuotation } from "../types/any";
import Base from "../components/Base";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";

interface Props {
  Status: number;
  Data: TQuotation[];
}

const Information: NextPage<Props> = (props) => {
  const quot = props.Data[0];
  return (
    <div>
      <CustomHead></CustomHead>
      <Header></Header>
      <div className="content mla mra">
        {quot.Category}
        {quot.Content}
      </div>
      <Base></Base>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/quotation/`);
  const ret: Props = await res.json();

  const paths = ret.Data.map((quot: TQuotation) => `/${quot.Slug}`);
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  info: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const info = ctx.params.info;

  const res = await fetch(`${baseUrl}/quotation/?s=${info}`);
  const ret = await res.json();

  return {
    props: {
      Status: ret.Status,
      Data: ret.Data,
    },
    revalidate: 1,
  };
};

export default Information;
