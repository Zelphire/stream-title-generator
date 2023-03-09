import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import InputElement from "@components/InputElement";
import styles from "../components/Header.module.css";
import SelectDropDown from "@components/SelectDropDown";

const PLATFORM_OPTIONS = [
  { id: "vstream", value: "vtuber stream", label: "Vtuber Stream" },
  { id: "stream", value: "stream", label: "Stream" },
  { id: "video", value: "Youtube", label: "Youtube" },
  { id: "tiktok", value: "tiktok", label: "TikTok" },
];
const SUGGESTION_OPTIONS = [
  { id: 1, value: 5, label: "5" },
  { id: 2, value: 10, label: "10" },
  { id: 3, value: 15, label: "15" },
  { id: 4, value: 20, label: "20" },
  { id: 5, value: 25, label: "25" },
  { id: 6, value: 50, label: "50" },
];
export default function Home() {
  return (
    <div className="container">
      <img
        src="/Chibibanner.png"
        alt="Chibi Banner"
        className={styles.bannerImage}
      />
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Steam title generator (Beta)!" />{" "}
        <SelectDropDown
          label="Platform"
          id="platform"
          options={PLATFORM_OPTIONS}
        />
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
          label="Number of Suggestions"
          id="suggestions"
          options={SUGGESTION_OPTIONS}
        />
      </main>
      <Footer />
    </div>
  );
}
