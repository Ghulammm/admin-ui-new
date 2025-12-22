import React from "react";
import Card from "../Elements/Card";
import { goals } from "../../data";
import Icon from "../Elements/Icon";

const CardGoal = () => {
  return (
    <Card
      title="Goals"
      desc={
        <div className="p-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">${goals.presentAmount.toLocaleString()}</p>
              <div className="p-1 bg-gray-100 rounded">
                <Icon.Edit size={16} color="gray" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">May, 2023</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Target Value</span>
              <span className="font-bold text-gray-800">${goals.targetAmount.toLocaleString()}</span>
            </div>
            {/* Progress Bar sederhana */}
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${(goals.presentAmount / goals.targetAmount) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-4">
             <Icon.Award size={32} className="text-primary" />
             <p className="text-xs text-gray-500">You have saved {((goals.presentAmount / goals.targetAmount) * 100).toFixed(0)}% of your goal!</p>
          </div>
        </div>
      }
    />
  );
};

export default CardGoal;