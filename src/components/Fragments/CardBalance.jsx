import React from "react";
import Card from "../Elements/Card";
import { balances } from "../../data";
import Icon from "../Elements/Icon";

const CardBalance = () => {
  return (
    <Card
      title="Total Balance"
      desc={
        <div>
          {balances.map((balance) => (
            <div key={balance.id} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-2xl font-bold text-gray-800">${balance.balance.toLocaleString()}</p>
                {balance.logo}
              </div>
              <p className="text-sm text-gray-500">{balance.bankName} - {balance.accountType}</p>
              <p className="text-xs text-gray-400 tracking-widest mt-1">{balance.accountNumber}</p>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-primary cursor-pointer hover:underline">
            <span className="text-sm font-bold">All Accounts</span>
            <Icon.ChevronRight size={16} />
          </div>
        </div>
      }
    />
  );
};

export default CardBalance;