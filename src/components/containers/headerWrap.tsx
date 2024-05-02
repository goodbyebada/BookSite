/**
 * header
 * 제목 login logout profile 으로 구성되어있습니다.
 *
 *
 * 사이즈에 따라 달라질 예정이다
 */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderWrap() {
  const router = useRouter();
  return (
    <>
      <nav className="header ">
        <div className="d-flex flex-row justify-content-between">
          <Link className="p-3 navbar-brand bg-white" href={"/"}>
            HOME
          </Link>
          <ul className="ms-auto">
            <Link className="p-3 nav-link" href="/loginPage">
              Login
            </Link>
            <Link className=" p-3 nav-link" href="#">
              Profile
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
