import React,{ Component}  from 'react';

class Navigations extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                            
      </button>
      <a className="navbar-brand1" href="#">Daily Blogs</a>
    </div>
    {/* <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div> */}
  </div>
</nav>


        )    
    };
    }
        
export default Navigations;
