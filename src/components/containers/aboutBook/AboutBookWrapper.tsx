export default function AboutBookWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("AboutBookWrapper render");
  return <div>{children}</div>;
}
