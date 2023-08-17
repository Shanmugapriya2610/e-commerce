import React, { useEffect, useState } from "react";
import './styles.scss'
import assets from '../../assets'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ListItemButton, ListItemText } from "@mui/material";
import SVG from "../../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../../redux/reducers/userSlice";
import {
    userData
} from '../../redux/reducers/userSlice'

const Sidebar = (props) => {


    const [collapse, setCollapse] = useState(false);

    const [navLink, setNavLink]= useState([
        {
            to: "/admin/dashboard",
            label: "Dashboard",
            Icon: SVG.DashboardIcon,
            id:'1',
        },
        {
            to: "/admin/all-bookings",
            label: "All Bookings",
            Icon: SVG.MyBookingsIcon,
            id:'2',
        },
        {
            to: "/admin/user-types",
            label: "User Types",
            Icon: SVG.UserTypesIcon,
            id:'4',
        },
        {
            to: "/admin/user-management",
            label: "User Management",
            Icon: SVG.UserManagementIcon,
            id:'4',
        },
        {
            to: "/admin/change-password",
            label: "Change Password",
            Icon: SVG.ChangePasswordIcon,
            id:'5',
        },
       
    ]);
    const [mainLinks, setMainLinks]= useState([])

    let navigate = useNavigate();

    let user = useSelector(userData);


    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 500) {
                hideDrawer()
            } else {
               openDrawer()
            }
        });

        let permission = [...user?.userType?.permission];

        let navLinks = [];

        permission.map(it=>{
            let backup = [...navLink];
            let items = backup.filter(i => i.id == it);
            navLinks = [...navLinks,...items];
        });

        navLinks.push( {
            to: "",
            label: "Log out",
            Icon: SVG.LogoutIcon,
            id:'0',
        })

        setMainLinks(navLinks);


    }, []);


    const openDrawer = () => {
        document.getElementById("logo").style.display = "block";
        document.getElementById("sideBar").style.width = "220px";
        document.getElementById("main").style.marginLeft = "240px";
        document.getElementById("back").style.transform = "rotate(0deg)"
        document.getElementById("back").style.transition = "0.5s"
        setTimeout(() => {
            setCollapse(false);
        }, 380);
    }

    const hideDrawer = () => {
        document.getElementById("sideBar").style.width = "85px";
        document.getElementById("main").style.marginLeft = "110px";
        document.getElementById("logo").style.display = "none";
        document.getElementById("back").style.transform = "rotate(180deg)"
        document.getElementById("back").style.transition = "0.5s";
        setCollapse(true);
    }

    const toggleSidebar = () => {
        if (collapse) {
            openDrawer();
        } else {
            hideDrawer();
        }
    };

    let dispatch = useDispatch();


    const onClickNav = async (label) => {
        if(label == "Log out"){
            await dispatch(clearUserData())
            navigate('/auth/login');
        }
    }

    const location = useLocation();
    return (
        <div id="sideBar" className="side-bar-container">

            <div className="sidebar-image-container">
                <img src={assets.Images.yatra_logo} alt="yatra" id="logo" className="yatra-logo" />
                <img onClick={toggleSidebar} id="back" src={assets.Images.menu_back} alt="menu_back" className="menu-back-logo" />
            </div>


            <div>
                {
                    mainLinks.map(({ to, label, Icon }, index) => {
                        return (
                            <NavLink
                                to={to != "" ? to : null}
                                onClick={()=> onClickNav(label)}
                                style={{ textDecoration: "none" }}
                                key={`${index}`}>
                                <ListItemButton
                                    button="true"
                                    className={
                                        location.pathname === to ? "active-div" : "in-active-div"
                                    }
                                >
                                    <div>
                                        <ListItemText>
                                            <span>
                                                <Icon active={location.pathname === to} />
                                            </span>

                                            {
                                                !collapse &&
                                                <span
                                                    className={
                                                        location.pathname === to ? "font-regular-14 active-label" : "font-regular-14 in-active-label"
                                                    } >
                                                    {label}
                                                </span>
                                            }
                                        </ListItemText>
                                    </div>
                                </ListItemButton>

                            </NavLink>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar;