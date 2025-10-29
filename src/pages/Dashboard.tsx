import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Zap, Activity, TrendingUp, MapPin } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const swapData = [
  { time: "00:00", swaps: 12 },
  { time: "04:00", swaps: 8 },
  { time: "08:00", swaps: 35 },
  { time: "12:00", swaps: 48 },
  { time: "16:00", swaps: 52 },
  { time: "20:00", swaps: 38 },
];

const batteryHealthData = [
  { station: "Station A", health: 95 },
  { station: "Station B", health: 88 },
  { station: "Station C", health: 92 },
  { station: "Station D", health: 78 },
  { station: "Station E", health: 85 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Real-time monitoring and analytics for your EV battery swapping network</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Swaps"
            value={23}
            icon={Activity}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Battery Health"
            value="87%"
            icon={Battery}
            trend={{ value: 3, isPositive: true }}
          />
          <StatsCard
            title="Total Stations"
            value={52}
            icon={MapPin}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Daily Swaps"
            value={193}
            icon={Zap}
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Swap Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Swap Activity</CardTitle>
              <CardDescription>Battery swaps over the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={swapData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="swaps" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Battery Health Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Station Health</CardTitle>
              <CardDescription>Average battery health by station</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={batteryHealthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="station" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar 
                    dataKey="health" 
                    fill="hsl(var(--secondary))" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Swaps</CardTitle>
              <CardDescription>Latest battery swap transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "SW-2847", station: "Station Alpha", time: "2 mins ago", status: "completed" },
                  { id: "SW-2846", station: "Station Beta", time: "5 mins ago", status: "completed" },
                  { id: "SW-2845", station: "Station Gamma", time: "12 mins ago", status: "in-progress" },
                  { id: "SW-2844", station: "Station Delta", time: "18 mins ago", status: "completed" },
                ].map((swap) => (
                  <div key={swap.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{swap.id}</p>
                        <p className="text-sm text-muted-foreground">{swap.station}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{swap.time}</p>
                      <p className={`text-sm font-medium capitalize ${
                        swap.status === 'completed' ? 'text-secondary' : 'text-primary'
                      }`}>
                        {swap.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
