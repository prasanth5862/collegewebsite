import collegeLogo from '../../Assets/collegelogo.png';
import './style.css';
function NavBar() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div id="navbar">
          <div className="logo-container">
            <img src={collegeLogo} alt="Clglogo"/>
            </div>
            <ul className="nav-links">
            <li onClick={() => scrollToSection("Home")}>Home</li> 
            <li onClick={() => scrollToSection("About-us")}>About Us</li> 
            <li onClick={() => scrollToSection("leadership")}>Leadership</li>
            <li onClick={() => scrollToSection("Admissions")}>Admissions</li>
            <li onClick={() => scrollToSection("campus-life")}>Campus Life</li>
            <li onClick={() => scrollToSection("Placements")}>Placements</li>
            </ul> 
        </div>
  );
}
export default NavBar;
