import "./App.css";
import Guarantee from "./components/Guarantee";
import coin from "./assets/coin.png";
import delivery from "./assets/f-delivery.png";
import chat from "./assets/chat.png";

function App() {
  const data = [
    {
      imgUrl: delivery,
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur",
    },
    {
      imgUrl: coin,
      title: "100% Money Back",
      description:
        "Numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu optio, eaque rerum! Provident similique accusantium nemo autem.",
    },
    {
      imgUrl: chat,
      title: "7/24 Online Support",
      description:
        "Molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed.",
    },
  ];

  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <Guarantee
            key={index}
            img={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default App;
