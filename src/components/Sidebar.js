import "./Sidebar.css";
import logo from "./logo.svg";
import overview from "./overview.svg";
import inactive from "./tickets.svg";
import ideas from "./ideas.svg";
import contacts from "./contacts.svg";
import agents from "./agents.svg";
import articles from "./articles.svg";
import settings from "./settings.svg";
import subscription from "./subscription.svg";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarLogo">
        <img src={logo} alt="Logo" />;
        <h1 className="DashboardKit">Dashboard Kit</h1>
      </div>

      <SidebarList name="Overview" imgSrc={overview} />
      <SidebarList name="Tickets" imgSrc={inactive} />
      <SidebarList name="Ideas" imgSrc={ideas} />
      <SidebarList name="Contacts" imgSrc={contacts} />
      <SidebarList name="Agents" imgSrc={agents} />
      <SidebarList name="Articles" imgSrc={articles} />
      <hr className="Divider" />
      <SidebarList name="Settings" imgSrc={settings} />
      <SidebarList name="Subscription" imgSrc={subscription} />
    </div>
  );
}

function SidebarList({ name, imgSrc }) {
  return (
    <div className="SidebarList">
      <img src={imgSrc} alt="Logo" />
      <p className="SidebarList">{name}</p>
    </div>
  );
}

export default Sidebar;
