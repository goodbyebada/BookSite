// page.tsx
import React, { useState } from "react";
import MainPage from "../components/component/MainPage";
import HeaderWrap from "@components/containers/headerWrap";
import SelectTemplate from "@components/component/SelectTemplate";

export default async function Home() {
  const [mainPageData, setMainPageData] = useState<any>(null);

  // 데이터를 백엔드로 보내고 처리하는 함수
  const handleDataSubmit = async (data: any) => {
    try {
      // 데이터를 백엔드로 보냄 (예: fetch 또는 axios를 사용하여 POST 요청을 보냄)
      const response = await fetch("/backend", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      // 백엔드로부터 받은 데이터를 상태에 저장하거나 필요한 처리를 수행
      setMainPageData(responseData);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SelectTemplate onSubmit={handleDataSubmit} />
      <MainPage dataList={mainPageData} />
    </main>
  );
}
