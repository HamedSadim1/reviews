import { Review, ReviewTitle } from "./components/Review";
import { APP_TITLE } from "./constants";

function App() {
  return (
    <main>
      <section className="container">
        <ReviewTitle title={APP_TITLE} />
        <Review />
      </section>
    </main>
  );
}

export default App;
