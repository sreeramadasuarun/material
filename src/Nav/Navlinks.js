import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Nav/Navlinksstyle.css"
import { useAuth } from '../login/auth'
import { useNavigate } from 'react-router-dom'
import { removeData } from 'jquery'


const Navlinks = () => {
    const navigate = useNavigate()



    /* When the user clicks on the button, 
     toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("Active");
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('Active')) {
                        openDropdown.classList.remove('Active');
                    }
                }
            }
        }
    }






    function myFunction1() {
        document.getElementById("anotherFunction1").classList.toggle("Active");
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn1')) {
                var dropdowns = document.getElementsByClassName("dropdown-content1");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('Active')) {
                        openDropdown.classList.remove('Active');
                    }
                }
            }
        }
    }


    // Close the dropdown if the user clicks outside of it





    const { user, logout } = useAuth()

    const data = useAuth()

    console.log(data);

    // const hide = () => {
    //     const style = {
    //         heading: { display: "none" }
    //     }
    // }





    return (

        <div >

            <nav className="navigation">
                <ul className="nav-type">
                    <li><NavLink to="/" className="active0">Home</NavLink></li>
                    <li><NavLink to="/About" className="active1">About</NavLink></li>
                    <li><NavLink to="/Contact" className="active2">Contact</NavLink></li>
                    <li><NavLink to="*" className="active3">Support</NavLink></li>


                    <div className="dropbtn1">
                        <li><NavLink to="Contact" onMouseEnter={myFunction1} className="active4">Dropdown</NavLink>
                            <i className="fa fa-caret-down"></i>
                        </li>
                    </div>



                    <div >
                        <div className="dropdown-content1" id='anotherFunction1'>
                            <li><NavLink to="/jhiuh" >About</NavLink></li>
                            <li><NavLink to="/ijin" >Contact</NavLink></li>
                            <li><NavLink to="/jnijn">Support</NavLink></li>
                        </div>
                    </div>






                    <div className="line"></div>
                    <li><a><i className="fa fa-search"></i></a></li>




                    <li className='login'>
                        <div className="dropbtn">
                            {
                                user ?
                                    <NavLink onMouseEnter={!myFunction} onClick={logout} to="/Logout">Logout</NavLink>
                                    :
                                    <NavLink onMouseEnter={myFunction} to="/Login">Login</NavLink>}
                        </div>
                    </li>




                    <div className="dropdown" id='myDropdown'>

                        <div>
                            <div onClick={() => { navigate("/Login") }}

                                className="drop1">Login</div>
                            <hr />

                            <div onClick={() => { navigate("/Contact") }}

                                className="drop2">Contact</div>
                            <hr />
                            <div className="drop3">Login With Google</div>
                        </div>
                    </div>

                </ul>
            </nav>

        </div >
    )
}

export default Navlinks




//     < div class="wrapper" >

//         <nav class="tabs">
//             <a href="#" class="active"><i class="fab fa-superpowers"></i>Avengers</a>
//             <a href="#">Hulk</a>
//             <a href="#"><i class="fas fa-bolt"></i>Thor</a>
//             <a href="#"><i class="fas fa-burn"></i>Marvel</a>
//         </nav>
// </div >