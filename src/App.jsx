import About from "./component/About/About"
import Navbar from "./component/Navbar/Navbar"
import Services from "./component/Services/Services"
import Skill from "./component/Skill/Skill"
import Project from "./component/Project/Project"
import TeamMember from "./component/TeamMember/TeamMember"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"



function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <About></About>
    <Services></Services>
    <Skill></Skill>
    <Project></Project>
    <TeamMember></TeamMember>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App

