import Header from "./components/Header";
import EventsController from "./components/EventsController";
import { EventProvider } from "./components/context/FetchContext";
import { SelectedProvider } from "./components/context/SelectedEventsContext";

function App() {
  return (
    <EventProvider>
      <SelectedProvider>
        <div className="App">
          <Header />
          <EventsController />
        </div>
      </SelectedProvider>
    </EventProvider>
  );
}

export default App;
