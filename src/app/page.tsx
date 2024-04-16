import MainPage from "../components/component/mainPage";

import { FirstScreen } from "../components/component/firstScreen";

export default async function Home() {
  // let list: [] = data.item;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPage />
    </main>
  );
}
