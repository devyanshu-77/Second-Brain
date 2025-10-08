import Button from "./components/Button";
import Card from "./components/Card";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div className="m-8">
      <Card
        title="Learn React"
        tags="productivity"
        type="youtube"
        link="https://youtu.be/54w5Okqb4c0?si=ibv5eEJ1UQLV4i_F"
      />
      <Card
        title="Testing is on"
        tags="test"
        type="twitter"
        link="https://x.com/AvinashSingh_20/status/1975573494642471009"
      />
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          More Free Resources 👇
          <br />
          <br />
          ✅Free mock test-{" "}
          <a href="https://t.co/LkDFOthHrG">https://t.co/LkDFOthHrG</a>
          <br />
          ✅ATS Score checker &amp; Resume optimization-
          <a href="https://t.co/Jrne5gb920">https://t.co/Jrne5gb920</a>
          <br />
          ✅PYQs - <a href="https://t.co/zr03X8aOti">https://t.co/zr03X8aOti</a>
          <br />
          ✅Roadmaps -{" "}
          <a href="https://t.co/zwOrfupIOH">https://t.co/zwOrfupIOH</a>
          <br />
          ✅Interview questions -{" "}
          <a href="https://t.co/Op679dK8Or">https://t.co/Op679dK8Or</a>
          <br />
          ✅Interview experience -…
        </p>
        &mdash; Avinash Singh (@AvinashSingh_20){" "}
        <a href="https://twitter.com/AvinashSingh_20/status/1975815427159728173?ref_src=twsrc%5Etfw">
          October 8, 2025
        </a>
      </blockquote>
      <iframe

        src="https://www.youtube.com/embed/54w5Okqb4c0?feature=oembed"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="The Job Market Has Changed... Again?| What Are My Bets for 2025-26"
      ></iframe>
    </div>
  );
};

export default App;
