import Button from "./components/Button";

const App = () => {
  return (
    <div className="flex items-center gap-8 mt-2">
      <Button
        text={"Size: sm"}
        size="sm"
        variant={"primary"}
        onClick={() => {
          alert("Hello");
        }}
      />
      <Button
        text={"Size: md"}
        size="md"
        variant={"primary"}
        onClick={() => {
          alert("Hello");
        }}
      />
      <Button
        text={"Size: lg"}
        size="lg"
        variant={"primary"}
        onClick={() => {
          alert("Hello");
        }}
      />
      <Button
        text={"Size: xl"}
        size="xl"
        variant={"primary"}
        onClick={() => {
          alert("Hello");
        }}
      />
      <Button
        text={"Size: 2xl"}
        size="2xl"
        variant={"secondary"}
        onClick={() => {
          alert("Hello");
        }}
      />
    </div>
  );
};

export default App;
