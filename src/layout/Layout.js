import Navigation from "../components/Navigation";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Router />
      </main>
    </div>
  );
};

export default Layout;
