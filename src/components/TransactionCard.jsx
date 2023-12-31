import React, { useEffect, useState } from "react";
import { createClient } from "urql";

const QueryURL =
  "https://api.studio.thegraph.com/query/45504/ensindexer/version/latest";
const client = createClient({
  url: QueryURL,
});
const query = `{
    approvals(first: 50) {
      id
      owner
      spender
      value
      blockNumber
      blockTimestamp
    }
  }`;

const TransactionCard = () => {
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    const getApprovals = async () => {
      const { data } = await client.query(query).toPromise();
      setApprovals(data.approvals);
      console.log(data);
    };
    getApprovals();
  }, []);
  return (
    <div className="container mx-auto w-full bg-white rounded-xl p-6 mt-40 md:-mt-8 ">
      <div className="text-2xl underline text-center py-6 rounded-full text-yellow-500 px-6 font-medium">
        <p>Scroll Down For Transactions</p>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="pb-4 bg-white dark:bg-gray-900 pt-6 pl-4">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction Owner
              </th>
              <th scope="col" class="px-6 py-3">
                Spender
              </th>
              <th scope="col" class="px-6 py-3">
                Value
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="overflow-hidden">
            {approvals.map((approval, idx) => {
              return (
                <>
                  <tr
                    key={idx}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-search-1" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden w-[240px] block"
                    >
                      {approval.owner}
                    </th>
                    <td class="px-6 py-4">
                      <p className=" text-ellipsis overflow-hidden w-[120px] block">
                        {approval.spender}
                      </p>
                    </td>
                    <td class="px-6 py-4">
                      <p className=" text-ellipsis overflow-hidden w-[120px] block">
                        ${approval.value}
                      </p>
                    </td>
                    <td class="px-6 py-4">
                      <p className=" text-ellipsis overflow-hidden w-[120px] block">
                        {approval.id}
                      </p>
                    </td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* {approvals.map((approval, id) => {
        return (
          <>
            <div key={id} className="flex flex-col">
              <div className="id-card">
                <p>{approval.id}</p>
              </div>
              <h2>
                Name: <span>{approval.owner}</span>
              </h2>
              <p>
                symbol: <span>{approval.spender}</span>
              </p>
              <span className="stamp">{approval.value}</span>
            </div>
          </>
        );
      })} */}
    </div>
  );
};

export default TransactionCard;
