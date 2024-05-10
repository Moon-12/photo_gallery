import NavBar from "./NavBar/NavBar";
import Picture from "./Pictures/Pictures";
import SearchBox from "./SearchBox/SearchBox";

const RootComp = () => {
  return (
    <div className="container">
      <header className="header"></header>
      <div className="content-body">
        <nav className="sidenav"></nav>
        <main className="content">
          <SearchBox />
          <NavBar />
          <Picture />
        </main>
        <aside className="ads"></aside>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};
export default RootComp;
