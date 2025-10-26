import React from 'react';
import { useGoogleSheetsData } from '@/hooks/useGoogleSheetsData';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { MetricsGrid } from '@/components/dashboard/MetricsGrid';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { IndustryChart } from '@/components/dashboard/IndustryChart';
import { TopClientsTable } from '@/components/dashboard/TopClientsTable';
import { RevenueBarChart } from '@/components/dashboard/RevenueBarChart';
import { IndustryRevenueChart } from '@/components/dashboard/IndustryRevenueChart';
import { ClientsDataTable } from '@/components/dashboard/ClientsDataTable';
import { LoadingScreen } from '@/components/dashboard/LoadingScreen';
import { ErrorDisplay } from '@/components/dashboard/ErrorDisplay';

const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/1gdHD6ThLrdqqh4qzGEKus_atnlUfziFN9gNXWrAb3LA/export?format=csv&grid=0';

const Index = () => {
  const { data, loading, error, lastUpdated, refresh } = useGoogleSheetsData(GOOGLE_SHEETS_CSV_URL);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={refresh} />;
  }

  return (
    <DashboardLayout>
      <DashboardHeader />
      
      <MetricsGrid data={data} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={data} />
        <IndustryChart data={data} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueBarChart data={data} />
        <IndustryRevenueChart data={data} />
      </div>
      
      <TopClientsTable data={data} />
      
      <ClientsDataTable data={data} />
      
      {lastUpdated && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Last updated: {lastUpdated.toLocaleString('en-IN')}
          </p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Index;
