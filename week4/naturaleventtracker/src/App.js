import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <Footer />
        </div>
      </SelectedProvider>
    </EventProvider>
  );
}

export default App;
