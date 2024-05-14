import MainPage from "../components/component/mainPage";
import HeaderWrap from "@components/containers/headerWrap";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPage />
    </main>
  );
}
