import React from 'react';
import Layout from './components/templates/Layout';
import Chart from './components/molecules/Chart';

const data = [
  { name: 'Binance', coin: 'BTC', balance: '0.0000123' },
  { name: 'Binance', coin: 'USDT', balance: '0.0000123' },
  { name: 'Binance', coin: 'BUSD', balance: '0.0000123' },
];

const Groups = [
  {
    icon: '/src/components/atoms/assets/abc.svg',
    name: 'ABC 15',
  },
  {
    icon: '/src/components/atoms/assets/champion.svg',
    name: 'The Champions',
  },
  {
    icon: '/src/components/atoms/assets/bloom.svg',
    name: 'Bloom  Group',
  },
  {
    icon: '/src/components/atoms/assets/sha.svg',
    name: 'SHA 145',
  },
  {
    icon: '/src/components/atoms/assets/etda.svg',
    name: 'ETDA Gurus',
  },
  {
    icon: '/src/components/atoms/assets/req.svg',
    name: 'Req Group',
  },
];

const emails = [
  {
    name: 'johnryan@gmail.com',
  },
  {
    name: 'jonathanwhite@gmail.com',
  },
  {
    name: 'macryenoldsjean@gmail.com',
  },
  {
    name: 'josephjacobjudah@gmail.com',
  },
];

const Home = () => {
  return (
    <Layout>
      <section>
        <div className="justify-end flex items-center h-24 pr-20 gap-x-2 bg-[#131313]">
          <img
            src="/src/components/atoms/assets/avatar.png"
            className="h-10 w-10"
            alt=""
          />
          <p>Martinez George</p>
        </div>

        <main className="bg-[#131313] rounded-xl space-y-4">
          <div className="flex-col px-4 py-3 justify-between md:flex-row md:flex bg-[#32393C33]">
            <aside className="flex bg-[#32393C33]">
              <div className="pl-10 py-2">
                <p className="pt-4 text-2xl">My Wallet</p>
                <div className="mt-12 flex-col gap-x-10 space-y-6">
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-[#FF8B00] rounded-full"></span>
                    <h2 className="pl-2">BTC</h2>
                    <p className="text-white/60 pl-1"> 36.77%</p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-[#0019F8] rounded-full"></span>
                    <h2 className="pl-2"> USDT</h2>
                    <p className="text-white/60 pl-1"> 36.77%</p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-[#D00BF0] rounded-full"></span>
                    <h2 className="pl-2"> Others</h2>
                    <p className="text-white/60 pl-1"> 36.77%</p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2.5 h-2.5 bg-[#00B6FF] rounded-full"></span>
                    <h2 className="pl-2"> BNB</h2>
                    <p className="text-white/60 pl-1"> 36.77%</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <Chart />
              </div>
            </aside>
            <aside className="rounded-lg">
              <table className="w-[39.375rem] bg-[#32393C33]">
                <tr className="border-b-[#2C2C2C] border-solid border-b-[1px] text-white/80">
                  <th className="py-4">Exchange Wallet</th>
                  <th>Coin</th>
                  <th>Balance</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr
                      key={key}
                      className="border-b-[#2C2C2C] border-solid border-b-[1px] text-[#FFFFFF] text-center"
                    >
                      <td className="py-6">{val.name}</td>
                      <td>{val.coin}</td>
                      <td>{val.balance}</td>
                    </tr>
                  );
                })}
              </table>
            </aside>
          </div>
          <div className="px-12 bg-[#32393C33] rounded-xl py-2">
            <h2 className="mt-8">Signal Groups</h2>
            <div className="my-6 flex justify-between">
              <div>
                <button className="text-white/80 bg-[#FFFFFF14] py-4 px-2 rounded-xl">
                  Groups You Manage
                </button>
                <button className="text-[#FFFFFF66] pl-4">
                  Other Signal Groups
                </button>
              </div>
              <a href="/" className="text-[#00B6FF]">
                Create New Signal Group
              </a>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
              <aside className="border-[1px] border-solid border-[#2c2c2c] rounded-xl py-2 px-4">
                <p className="border-b-[1px] border-solid border-b-[#2C2C2C] py-2 text-lg">
                  Signal Groups You Belong To
                </p>
                {Groups.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex space-x-2 border-b-[1px] border-solid border-b-[#2C2C2C] py-3 ${
                        index === Array.length - 1 && 'border-none'
                      }`}
                    >
                      <img src={val.icon} alt="" />
                      <p>{val.name}</p>
                    </div>
                  );
                })}
              </aside>
              <aside className="border-[1px] border-solid border-[#2c2c2c] rounded-xl py-6 px-4">
                <div className="flex justify-between">
                  <div className="flex">
                    {' '}
                    <img src={Groups[0].icon} alt="" />
                    <p>{Groups[0].name}</p>
                  </div>
                  <a href="#" className="text-[#00B6FF]">
                    Edit Signal Group
                  </a>
                </div>
                <p className="text-white/80 text-sm">Private Group</p>
                <div className="py-4">
                  <p className="text-white/80">Minimum Allocation</p>
                  <h2 className="text-xl">100 USDT</h2>
                </div>
                <div className="py-4">
                  <p className="text-white/80">Maximum Allocation</p>
                  <h2 className="text-xl">1000 USDT</h2>
                </div>
                <div className="flex space-x-2">
                  <p>Subscription</p>
                  <a href="#" className="text-[#00B6FF] text-sm">
                    Free
                  </a>
                </div>
                <p className="text-sm py-3">Total Revenue Generated</p>
                <div className="flex justify-between py-2">
                  <p className="text-[#FFFFFFCC] text-sm">This Month</p>
                  <h2 className="text-xl">$1000.00</h2>
                </div>
                <button className="border-solid border-[#00B6FF] border-[1px] text-[#00B6FF] text-sm rounded-xl px-2 py-2 my-3">
                  View Signal Group
                </button>
              </aside>
              <aside className="border-[1px] border-solid border-[#2c2c2c] rounded-xl py-2 px-4">
                <p className="text-lg">Memberships</p>
                <button className="border-solid border-[#00B6FF] border-[1px] text-[#00B6FF] text-sm rounded-xl px-2 py-2 my-4">
                  Invite Members
                </button>
                <div className="flex justify-between">
                  <aside>
                    <p className="text-white/80">Members</p>
                    <h2 className="my-3 text-2xl">78</h2>
                  </aside>
                  <aside>
                    <p className="text-white/80">Connection Request</p>
                    <h2 className="my-3 text-2xl">5</h2>
                  </aside>
                </div>
                <div>
                  <p className="border-b-[1px] border-solid border-b-[#2C2C2C] text-lg py-2">
                    Active Member Emails
                  </p>
                  <div>
                    {emails.map((email, index) => (
                      <p
                        className="border-b-[1px] border-solid border-b-[#2C2C2C] py-2"
                        key={index}
                      >
                        {email.name}
                      </p>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Home;
