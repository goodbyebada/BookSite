import InputTemplate from "@components/containers/sign/inputTemplate";
import test from "src/utils/signUp/signUpUtils";

export default function SignUpTemplate() {
  return (
    <>
      <InputTemplate item={"입력"} />
      <InputTemplate item={"성별"} />
    </>
  );
}
