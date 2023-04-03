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

        <div className="flex-col px-4 justify-between md:flex-row md:flex">
          <aside className="flex bg-[#32393C33]">
            <div className="pl-10">
              <p className="pt-6 text-2xl">My Wallet</p>
              <div className="mt-24 flex-col gap-x-10 space-y-6">
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#FF8B00] rounded-full"></span>
                  <h2> BTC</h2>
                  <p className="text-white/60"> 36.77%</p>
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#0019F8] rounded-full"></span>
                  <h2> USDT</h2>
                  <p className="text-white/60"> 36.77%</p>
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#D00BF0] rounded-full"></span>
                  <h2> Others</h2>
                  <p className="text-white/60"> 36.77%</p>
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#00B6FF] rounded-full"></span>
                  <h2> BNB</h2>
                  <p className="text-white/60"> 36.77%</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Chart />
            </div>
          </aside>
          <aside className="">
            <table className="w-[39.375rem] h-[17.3125rem] bg-[#32393C33]">
              <tr className="border-b-[#2C2C2C] border-solid border-b-[1px] text-white/80">
                <th>Exchange Wallet</th>
                <th>Coin</th>
                <th>Balance</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr
                    key={key}
                    className="border-b-[#2C2C2C] border-solid border-b-[1px] text-[#FFFFFF] text-center"
                  >
                    <td>{val.name}</td>
                    <td>{val.coin}</td>
                    <td>{val.balance}</td>
                  </tr>
                );
              })}
            </table>
          </aside>
        </div>
        <div className="px-12">
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
          <div className="flex">
            <aside className="border-[1px] border-solid border-[#2c2c2c]">
              <p className="border-b-[1px] border-solid border-b-[#2C2C2C]">
                Signal Groups You Belong To
              </p>
              {Groups.map((val, key) => {
                return (
                  <div
                    key={key}
                    className="flex space-x-2 border-b-[1px] border-solid border-b-[#2C2C2C]"
                  >
                    <img src={val.icon} alt="" />
                    <p>{val.name}</p>
                  </div>
                );
              })}
            </aside>
            <aside>
              <div className="flex">
                <div className="flex justify-between">
                  {' '}
                  <img src={Groups[0].icon} alt="" />
                  <p>{Groups[0].name}</p>
                </div>
                <a href="#" className="text-[#00B6FF]">
                  Edit Signal Group
                </a>
              </div>
              <p className="text-white/80 text-sm">Private Group</p>
              <div>
                <p className="text-white/80">Minimum Allocation</p>
                <h2 className="text-lg">100 USDT</h2>
              </div>
              <div>
                <p className="text-white/80">Maximum Allocation</p>
                <h2 className="text-lg">1000 USDT</h2>
              </div>
              <div className="flex">
                <p>Subscription</p>
                <a href="#" className="text-[#00B6FF]">
                  Free
                </a>
              </div>
              <p>Total Revenue Generated</p>
              <div className="flex">
                <p>This Month</p>
                <h2>$1000.00</h2>
              </div>
              <button className="border-solid border-[#00B6FF] border-[1px] text-[#00B6FF] text-sm rounded-xl px-2 py-2">
                View Signal Group
              </button>
            </aside>
            <aside>
              <p>Memberships</p>
              <button className="border-solid border-[#00B6FF] border-[1px] text-[#00B6FF] text-sm rounded-xl px-2 py-2">
                Invite Members
              </button>
              <div className="flex">
                <aside>
                  <p>Members</p>
                  <h2>78</h2>
                </aside>
                <aside>
                  <p>Connection Request</p>
                  <h2>78</h2>
                </aside>
              </div>
              <div>
                <p className="border-b-[1px] border-solid border-b-[#2C2C2C]">
                  Active Member Emails
                </p>
                <div>
                  {emails.map((email) => (
                    <p className="border-b-[1px] border-solid border-b-[#2C2C2C]">
                      {email.name}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;