'use client'

import { useState } from "react"; // Missing import
import AssetPieChart from "@/components/AssetPieChart";
import PortfolioValueChart from "@/components/PortfolioValueChart";
import RecentTransactions from "@/components/RecentTransactions";
import StatCard from "@/components/StatCard";
import { Activity, TrendingUp, Wallet, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const card1Data = [
  { value: 162000 }, { value: 163000 }, { value: 161000 },
  { value: 164000 }, { value: 165000 }, { value: 164500 }, { value: 165345 },
];
const card2Data = [
  { value: 1000 }, { value: -500 }, { value: 800 },
  { value: 1200 }, { value: -200 }, { value: 1500 }, { value: 1250 },
];
const card3Data = [
  { value: 38000 }, { value: 39000 }, { value: 41000 },
  { value: 40000 }, { value: 42000 }, { value: 44000 }, { value: 45320 },
];

export default function DashboardPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          title="Total Portfolio Value"
          value="₹1,65,345"
          icon={Wallet}
          chartData={card1Data}
          className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
        />
        <StatCard
          title="Today's Gain/Loss"
          value="₹1,250"
          change="+0.76%"
          icon={Activity}
          chartData={card2Data}
          className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
        />
        <StatCard
          title="Total Gain/Loss"
          value="₹45,320"
          change="+37.68%"
          icon={TrendingUp}
          chartData={card3Data}
          className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div>
            <AssetPieChart />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div>
            <PortfolioValueChart />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <RecentTransactions />
      </div>
    </div>
  );
}