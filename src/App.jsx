import { useState, useEffect } from "react";
import { createClient } from "urql";
import BigNumber from "bignumber.js";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TransactionCard from "./components/TransactionCard";
import Footer from "./components/Footer";
import ScrollDown from "./components/ScrollDown";

// const QueryURL =
//   "https://api.studio.thegraph.com/query/45504/ensindexer/version/latest";
// const client = createClient({
//   url: QueryURL,
// });
// const query = `{
//     approvals(first: 5) {
//       id
//       owner
//       spender
//       value
//       blockNumber
//       blockTimestamp
//     }
//   }`;
function App() {
  // const [approvals, setApprovals] = useState([]);

  // useEffect(() => {
  //   const getApprovals = async () => {
  //     const { data } = await client.query(query).toPromise();
  //     setApprovals(data.approvals);
  //     console.log(data);
  //   };
  //   getApprovals();
  // }, []);


  return (
    <>
      <div className="bg-image">
        <Header />
        <HeroSection />
        <ScrollDown />
        <TransactionCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
