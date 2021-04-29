import Head from "next/head";
import Base from "../components/Base";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <CustomHead></CustomHead>
      <Header></Header>
      <Base></Base>
    </div>
  );
}
