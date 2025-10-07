import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <>
      <Button
        variant="primary"
        text="SM Button"
        size="sm"
        startIcon={<PlusIcon size="sm" />}
        endIcon={<ShareIcon size="sm" />}
      />
      <Button
        variant="secondary"
        text="MD Button"
        size="md"
        startIcon={<PlusIcon size="md" />}
        endIcon={<ShareIcon size="md" />}
      />
      <Button
        variant="secondary"
        text="lg Button"
        size="lg"
        startIcon={<PlusIcon size="lg" />}
        endIcon={<ShareIcon size="lg" />}
      />
    </>
  );
};

export default App;
