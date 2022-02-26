import Header from "./components/Header";
import EventsController from "./components/EventsController";
import { EventProvider } from "./components/context/FetchContext";

function App() {
  return (
    <EventProvider>
      <div className="App">
        <Header />
        <EventsController />
      </div>
    </EventProvider>
  );
}

export default App;
