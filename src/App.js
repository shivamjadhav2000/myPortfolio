import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            <li><img src={logo} className="App-logo" alt="logo" /></li>
            <li><a href="#" >intro</a></li>
            <li><a href="#portfolio">portfolio</a>  </li>
            <li><a href="#">skills</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">contact me</a></li>
        </ul>
      </header>
      <div className="LandingPage">
          <h1 className="intro">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </h1>
          <div className="btncnt">
          <img style={{"opacity":"0.8"}} src="shivam2.jpg" className="Image" height="300" width="400" />
                <button className="Download"><p>click here</p></button>
          </div>
      </div>
      <div id="portfolio">
       {[1,2,3,4,5].map((i)=>{
           return (
           <div className="projects">
             <img src="project2.png" />
             <h1>
             <a href="#"> Food React App</a>
             </h1>
             <p>about my project food react app</p>
        </div>)
       })}
      </div>
      <div >
          <p className="intro">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <div className="btncnt">
                <button className="Download"><p>click here</p></button>
          </div>
      </div>
      <div >
          <p className="intro">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <div className="btncnt">
                <button className="Download"><p>click here</p></button>
          </div>
      </div>
    </div>
  );
}

export default App;
