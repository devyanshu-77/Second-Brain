import Card from "./components/Card";

const App = () => {
  return (
    <div className="m-8">
      <Card
        title="Tweet render test"
        tags="testing"
        type="x"
        link="https://x.com/AbhinavXJ/status/1976274486178795693"
      />
      <Card
        title="Youtube render test"
        tags="testing"
        type="youtube"
        link="https://youtu.be/AjvxmJdHipo?si=fmuZHc6CFfz6WZnV"
      />
    </div>
  );
};

export default App;
