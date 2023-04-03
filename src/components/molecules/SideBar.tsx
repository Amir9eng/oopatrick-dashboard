import './SideBar.scss';
import { NavLink } from 'react-router-dom';
import logo from '../atoms/assets/logo.png';

const firstDiv = [
  {
    icon: '/src/components/atoms/assets/Vector.svg',
    name: 'Dashboard',
  },
  {
    icon: '/src/components/atoms/assets/analytics.svg',
    name: 'Analytics',
  },
  {
    icon: '/src/components/atoms/assets/position.svg',
    name: 'Positions',
  },
  {
    icon: '/src/components/atoms/assets/notification.svg',
    name: 'Notifications',
  },
];

const second = [
  {
    icon: '/src/components/atoms/assets/bot.svg',
    name: 'Bots',
  },
  {
    icon: '/src/components/atoms/assets/signal.svg',
    name: 'Signal Group',
  },
];

const SideBar = () => {
  return (
    <div className="bg-[#131313]">
      <aside className="pl-10 pt-6 h-[5.6875rem] border-b-[1px] border-solid border-[#2C2C2C]">
        <img src={logo} alt="logo" className="w-[5.3125rem] h-[3.5rem]" />
      </aside>
      <div className="generic home text-white/40">
        {firstDiv.map((item) => (
          <NavLink className="flex gap-x-4" to="/">
            <img src={item.icon} alt="" />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="generic home text-white/40">
        {second.map((item) => (
          <NavLink className="flex gap-x-4" to="/">
            <img src={item.icon} alt="" />
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
