"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

export default function BookListPage({}) {
  const router = useRouter();

  // URL 매개변수에서 데이터 가져오기

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const show = searchParams.getAll;

  return (
    <div>
      THis is BookListPage
      <div style={{ backgroundColor: "red", height: "500px" }} />
    </div>
  );
}
