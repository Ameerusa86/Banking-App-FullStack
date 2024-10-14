import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "John", lastName: "Doe" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <h1>
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName + " " + loggedIn?.lastName || "Guest"}
              subtext="Access and manage your account and transactions"
            />
          </h1>
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        <RightSidebar />
      </div>
    </section>
  );
};

export default Home;
