type GreetingsProps = {
  name: string;
  mark: string;
};

export default function Greetings({ name, mark }: GreetingsProps) {
  console.log(`Im in Greetings`);
  console.log(`${name},${mark} `);
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};
