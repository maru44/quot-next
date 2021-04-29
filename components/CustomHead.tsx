import { NextPage } from "next";
import Head from "next/head";
import { THead } from "../types/any";

const defaultHeadData: THead = {
  title: "default title",
  ogtypeWebsite: "website",
  ogimage: "",
  ogtitle: "default title",
  ogdescription: "default description",
  seodescription: "default description",
};

const CustomHead = (headData: THead) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:type"
        content={
          headData.ogtypeWebsite
            ? headData.ogtypeWebsite
            : defaultHeadData.ogtypeWebsite
        }
      />
      <meta
        property="og:description"
        content={
          headData.ogdescription
            ? headData.ogdescription
            : defaultHeadData.ogdescription
        }
      />
      <meta property="og:url" content="" />
      <meta
        property="og:title"
        content={headData.ogtitle ? headData.ogtitle : defaultHeadData.ogtitle}
      />
      <meta
        property="og:image"
        content={headData.ogimage ? headData.ogimage : defaultHeadData.ogimage}
      />
      <meta
        name="description"
        content={
          headData.seodescription
            ? headData.seodescription
            : defaultHeadData.seodescription
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="" />
    </Head>
  );
};

export default CustomHead;
