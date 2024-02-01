import FrameComponent from "../components/FrameComponent";
import RectangleShape from "../components/RectangleShape";
import List from "../components/List";
import ParentEllipse from "../components/ParentEllipse";
import ParentWithEllipseAndFrame from "../components/ParentWithEllipseAndFrame";
import "./Main.css";

const Main = () => {
  return (
    <div className="main2">
      <img
        className="growtika-ngocbxiaro0-unsplash-icon"
        alt=""
        src="/growtikangocbxiaro0unsplash-1@2x.png"
      />
      <FrameComponent />
      <RectangleShape />
      <section className="icon">
        <div className="search">
          <div className="input">
            <div className="button">
              <h1 className="services-were-offering">
                Services We’re Offering
              </h1>
              <div className="divider" />
            </div>
          </div>
          <List />
          <ParentEllipse />
          <ParentWithEllipseAndFrame />
        </div>
      </section>
      <footer className="frame-parent">
        <img
          className="frame-child"
          loading="eager"
          alt=""
          src="/frame-24.svg"
        />
        <b className="copyright-2021">
          Copyright © 2021 Micro Technologies All Right Reserved
        </b>
      </footer>
    </div>
  );
};

export default Main;
