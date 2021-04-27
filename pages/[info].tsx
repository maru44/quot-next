import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { baseUrl } from "../utils/utils";

interface TQuot {
  Category: string;
  Content: string;
  Number: number;
}

interface Props {
  Status: number;
  Data: TQuot[];
}

const Information: NextPage<Props> = (props) => {
  const quot = props.Data[0];
  return (
    <div>
      {quot.Category}
      {quot.Content}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/quotation/`);
  const ret: Props = await res.json();

  const paths = ret.Data.map(
    (quot: TQuot) => `/${quot.Category}-${quot.Number}`
  );
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  info: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const info = ctx.params.info;
  const infoList = info.split("-");
  const cat = infoList[0];
  const num = infoList[1];

  const res = await fetch(`${baseUrl}/quotation/?c=${cat}&n=${num}`);
  const ret = await res.json();

  return {
    props: {
      Status: ret.Status,
      Data: ret.Data,
    },
  };
};

export default Information;
