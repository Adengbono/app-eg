const { default:  Banner } = require("./components/Banner");
const { default:  AboutMe } = require("./components/AboutMe"); 
const { default: Testimonials} = require("./components/Testimonials");


function App() {
  return (
    <><div className="app">
   
    </div>
    <Banner/>
    <AboutMe/>
    <Testimonials/>
    </>
  );
}

export default App;
