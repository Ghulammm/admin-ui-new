import React from "react";
import Card from "../Elements/Card";
import { expensesStatistics } from "../../data";

const CardStatistic = () => {
  return (
    <Card
      title="Statistics"
      desc={
        <div className="h-full">
           <div className="flex justify-between items-end gap-2 h-40 pb-4">
             {expensesStatistics.map((stat) => (
               <div key={stat.id} className="flex flex-col items-center flex-1">
                 <div className="w-full flex justify-center items-end gap-1 h-32">
                    {/* Bar Last Week */}
                    <div 
                      className="bg-gray-200 w-2 rounded-t" 
                      style={{ height: `${(stat.amountLastWeek / 300000) * 100}%` }}
                    ></div>
                    {/* Bar This Week */}
                    <div 
                      className="bg-primary w-2 rounded-t" 
                      style={{ height: `${(stat.amountThisWeek / 300000) * 100}%` }}
                    ></div>
                 </div>
                 <p className="text-[10px] text-gray-400 mt-2">{stat.date}</p>
               </div>
             ))}
           </div>
           <div className="flex gap-4 mt-4 border-t pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-xs text-gray-500">This Week</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <p className="text-xs text-gray-500">Last Week</p>
              </div>
           </div>
        </div>
      }
    />
  );
};

export default CardStatistic;