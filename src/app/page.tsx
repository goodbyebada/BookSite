import MainPage from "../components/component/MainPage";
import HeaderWrap from "@components/containers/headerWrap";
import SelectTemplate from "@components/component/SelectTemplate";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPage />
      {/* <SelectTemplate /> */}
    </main>
  );
}
