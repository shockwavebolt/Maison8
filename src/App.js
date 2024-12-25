import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Process from "./components/Process";
import Work from "./components/Work";

function App() {
  return (
    <>
      <section className="hero">
        {/* TODO: 
          - fix the hamburber menu not closing when scrolling(Possible fix: lock the scrolling when menu is open)
          -Touch up the navbar animations
          */}
        <NavBar />

        <h1>Maison8</h1>
      </section>
      <section className="aboutUs">
        <h5 className="sectionTitle">What we do</h5>
        <div className="textContainer">
          <p className="text1">
            We <span>design </span>and <span>build</span> websites for small
            businesses and professionals.
          </p>
        </div>
      </section>
      <section className="selectedWorks">
        <h5 className="sectionTitle">Selected Works</h5>
        <div className="selectedWorksContainer">
          <Work
            seperator={false}
            title="Sweet Delights"
            description="Lorem ipsum dolor sit amet consectetur. Fermentum sed suspendisse pellentesque adipiscing. Vulputate at urna faucibus elit egestas commodo gravida suspendisse. Orci pulvinar consectetur aenean dictum tellus justo tempus quis"
          />
          <Work
            seperator={true}
            title="Maven Maintenance LLC"
            description="Lorem ipsum dolor sit amet consectetur. Fermentum sed suspendisse pellentesque adipiscing. Vulputate at urna faucibus elit egestas commodo gravida suspendisse. Orci pulvinar consectetur aenean dictum tellus justo tempus quis"
          />
          <Work
            seperator={true}
            title="ZenFit"
            description="Lorem ipsum dolor sit amet consectetur. Fermentum sed suspendisse pellentesque adipiscing. Vulputate at urna faucibus elit egestas commodo gravida suspendisse. Orci pulvinar consectetur aenean dictum tellus justo tempus quis"
          />
        </div>
      </section>
      <section className="services">
        <h5 className="sectionTitle">Services</h5>
        <div className="servicesContainer">
          <div className="service">
            <h3 className="serviceTitle">Website Design</h3>
            <div className="seperator"></div>
            <p className="serviceDescription">
              Lorem ipsum dolor sit amet consectetur. Nibh sollicitudin proin
              morbi tortor. Id dignissim risus facilisis sed. Vulputate duis et
              egestas ipsum turpis tristique. Feugiat faucibus sapien .{" "}
            </p>
          </div>
          <div className="service">
            <h3 className="serviceTitle">Website Design + Web Development</h3>
            <div className="seperator"></div>
            <p className="serviceDescription">
              Lorem ipsum dolor sit amet consectetur. Nibh sollicitudin proin
              morbi tortor. Id dignissim risus facilisis sed. Vulputate duis et
              egestas ipsum turpis tristique. Feugiat faucibus sapien .{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="processSection">
        <h5 className="sectionTitle">The Process</h5>
        <div className="processContainer">
          <Process
            number="1"
            title="Strategy"
            description="Lorem ipsum dolor sit amet consectetur. Auctor eu vulputate
              iaculis tincidunt tellus sed in velit enim. Sed risus scelerisque
              orci lobortis a nisl mi enim. In eu magna consectetur tincidunt
              nisl platea euis"
          />
          <Process
            number="2"
            title="Wireframing"
            description="Lorem ipsum dolor sit amet consectetur. Auctor eu vulputate
              iaculis tincidunt tellus sed in velit enim. Sed risus scelerisque
              orci lobortis a nisl mi enim. In eu magna consectetur tincidunt
              nisl platea euis"
          />
          <Process
            number="3"
            title="Design"
            description="Lorem ipsum dolor sit amet consectetur. Auctor eu vulputate
              iaculis tincidunt tellus sed in velit enim. Sed risus scelerisque
              orci lobortis a nisl mi enim. In eu magna consectetur tincidunt
              nisl platea euis"
          />
          <Process
            number="4"
            title="Development"
            description="Lorem ipsum dolor sit amet consectetur. Auctor eu vulputate
              iaculis tincidunt tellus sed in velit enim. Sed risus scelerisque
              orci lobortis a nisl mi enim. In eu magna consectetur tincidunt
              nisl platea euis"
          />
          <Process
            number="5"
            title="Launch"
            description="Lorem ipsum dolor sit amet consectetur. Auctor eu vulputate
              iaculis tincidunt tellus sed in velit enim. Sed risus scelerisque
              orci lobortis a nisl mi enim. In eu magna consectetur tincidunt
              nisl platea euis"
          />
        </div>
      </section>
      <section className="ctaSection">
        <div className="ctaText_Form">
          <h2 className="ctaText">Let's build your site today!</h2>
          <Form />
        </div>
      </section>
      <section className="footer">
        <div className="footerContent">
          <div className="locationAndTime">The BX, New York</div>
          <h1>Maison8</h1>
        </div>

        <div className="copyright">
          © 2024 Maison8 studio. All rights reserved.
        </div>
      </section>
    </>
  );
}

export default App;
