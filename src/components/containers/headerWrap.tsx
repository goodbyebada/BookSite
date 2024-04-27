/**
 * header
 * 제목 login logout profile 으로 구성되어있습니다.
 *
 *
 * 사이즈에 따라 달라질 예정이다
 */
"use client";
import { useRouter } from "next/navigation";
import SearchBar from "./searchBar";

export default function HeaderWrap() {
  const router = useRouter();
  return (
    <header className="header-wrapper">
      <h1 className="ui_icon">Title</h1>
      <nav>
        <ul>
          <li>
            <button
              className="ui_icon"
              onClick={() => router.push("/loginPage")}
            >
              login
            </button>
          </li>
          <li>
            <button className="ui_icon">profile</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
