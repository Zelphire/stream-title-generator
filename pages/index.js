import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import InputElement from "@components/InputElement";
import SelectDropDown from "@components/SelectDropDown";

const PLATFORM_OPTIONS = [
  { id: "vstream", value: "vtuber stream", label: "Vtuber Stream" },
  { id: "stream", value: "stream", label: "Stream" },
  { id: "video", value: "Youtube", label: "Youtube" },
  { id: "tiktok", value: "tiktok", label: "TikTok" },
];
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Steam title generator (Beta)!" />
        <InputElement
          label="Game/category"
          type="text"
          id="game"
          placeholder="Enter the game title or category for the stream"
        />
        <InputElement
          label="KeyWords (Add keywords to be in title for more accurate generation
        seperated by ,)"
          type="text"
          id="keywords"
          placeholder="Eg : chaotic stream with friends, sus"
        />
        <SelectDropDown
          label="Platform"
          id="platform"
          options={PLATFORM_OPTIONS}
        />
      </main>
      <Footer />
    </div>
  );
}
