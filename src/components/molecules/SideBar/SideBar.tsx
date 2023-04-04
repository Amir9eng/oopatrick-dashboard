import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../atoms/assets/logo.png';
import DashIcon from '../../atoms/assets/DashIcon';
import AnalyticsIcon from '../../atoms/assets/AnalyticsIcon';
import PositionIcon from '../../atoms/assets/PositionIcon';
import NotificationIcon from '../../atoms/assets/NotificationIcon';
import BotsIcon from '../../atoms/assets/Botsicon';
import SignalIcon from '../../atoms/assets/SignalIcon';
import { useState } from 'react';

const firstDiv = [
  {
    icon: DashIcon,
    name: 'Dashboard',
  },

  {
    icon: AnalyticsIcon,
    name: 'Analytics',
  },
  {
    icon: PositionIcon,
    name: 'Positions',
  },
  {
    icon: NotificationIcon,
    name: 'Notifications',
  },
];

const second = [
  {
    icon: BotsIcon,
    name: 'Bots',
  },
  {
    icon: SignalIcon,
    name: 'Signal Group',
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-[#131313]">
      <aside className="pl-10 pt-6 h-[5.6875rem] border-b-[1px] border-solid border-[#2C2C2C]">
        <img src={logo} alt="logo" className="w-[5.3125rem] h-[3.5rem]" />
      </aside>
      <div className="generic home text-white/40">
        {firstDiv.map((item, itemIndex) => (
          <NavLink
            onClick={() => setActiveTab(itemIndex)}
            className={`flex gap-x-4  ${
              itemIndex === activeTab &&
              'text-[#00B6FF] border-l-2 border-solid border-l-[#00B6FF] pl-[1.5rem]'
            }`}
            to="/"
          >
            <item.icon
              color={itemIndex === activeTab ? '#00B6FF' : undefined}
            />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="generic home text-white/40">
        {second.map((item, index) => (
          <NavLink key={index} className="flex gap-x-4" to="/">
            <item.icon />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
      <div>
        <NavLink className="flex gap-x-4 text-white/40 pt-8 pl-10" to="/">
          <img src="/src/components/atoms/assets/dark.svg" alt="" />
          <p>Dark Mode</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
