import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
      		path:"/"
		},
		{
			text: "Products",
			icon: "icons/user.svg",
      		path:"/products"
		},
		{
			text: "Add-Products",
			icon: "icons/message.svg",
      path:"/addproduct"
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
      path:""
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
      path:""
		},
		{
			text: "Orders",
			icon: "icons/shopping-cart.svg",
      path:""
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
      path:""
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
      path:""
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" />
							<h2>Admin</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map((x,index) => {
						 return (<div key={index}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							>
							<Link  to={x.path} className="admin-Nav-icon">
							<img className="menu-item-icon" src={x.icon} alt=""  />
							</Link>	
						   <Link to={x.path} className='navl'>
							
							{isExpanded && <p>{x.text}</p>}
							</Link>
							{!isExpanded && <div className='tooltip'>{x.text}</div>}
						</div>)
      })}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
