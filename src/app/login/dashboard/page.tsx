import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import ArticleSection from "@/components/dashboard/ArticleSection";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <ArticleSection />
    </div>
  );
};

export default Dashboard;
