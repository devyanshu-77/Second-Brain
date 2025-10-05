import Button from "./components/Button";
import PlusIcon from "./icon/PlusIcon";
import ShareIcon from "./icon/ShareIcon";

const App = () => {
  return (
    <div className="flex items-center justify-evenly gap-8 mt-2">
      <Button
        variant="primary"
        text="sm Button"
        onClick={() => {
          console.log("click");
        }}
        startIcon={<PlusIcon size="sm" />}
        endIcon={<ShareIcon size="sm" />}
      />
      <Button
        variant="secondary"
        text="Md Button"
        size="md"
        onClick={() => {
          console.log("click");
        }}
        startIcon={<PlusIcon size="md" />}
      />
      <Button
        variant="secondary"
        text="lg Button"
        size="lg"
        onClick={() => {
          console.log("click");
        }}
        startIcon={<PlusIcon size="lg" />}
      />
    </div>
  );
};

export default App;
