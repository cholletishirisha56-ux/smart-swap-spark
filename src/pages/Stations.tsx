import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Battery, Zap, Clock } from "lucide-react";

const stations = [
  {
    id: 1,
    name: "Station Alpha",
    location: "Downtown Tech District",
    available: 8,
    total: 12,
    status: "operational",
    avgWaitTime: "3 min",
  },
  {
    id: 2,
    name: "Station Beta",
    location: "Green Valley Mall",
    available: 5,
    total: 10,
    status: "operational",
    avgWaitTime: "5 min",
  },
  {
    id: 3,
    name: "Station Gamma",
    location: "Airport Terminal 2",
    available: 12,
    total: 15,
    status: "operational",
    avgWaitTime: "2 min",
  },
  {
    id: 4,
    name: "Station Delta",
    location: "Harbor View Plaza",
    available: 0,
    total: 8,
    status: "busy",
    avgWaitTime: "15 min",
  },
  {
    id: 5,
    name: "Station Epsilon",
    location: "University Campus",
    available: 3,
    total: 10,
    status: "operational",
    avgWaitTime: "7 min",
  },
  {
    id: 6,
    name: "Station Zeta",
    location: "Riverside Park",
    available: 6,
    total: 8,
    status: "operational",
    avgWaitTime: "4 min",
  },
];

const Stations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Swap Stations</h1>
          <p className="text-muted-foreground">Find available battery swap stations near you</p>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <Card 
              key={station.id} 
              className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{station.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {station.location}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={station.status === "operational" ? "default" : "destructive"}
                    className={station.status === "operational" 
                      ? "bg-secondary/20 text-secondary border-secondary/50" 
                      : ""}
                  >
                    {station.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Availability */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Battery className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Available Batteries</span>
                  </div>
                  <span className="text-2xl font-bold">
                    {station.available}
                    <span className="text-sm text-muted-foreground">/{station.total}</span>
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                      style={{ width: `${(station.available / station.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Wait: </span>
                    <span className="font-medium">{station.avgWaitTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Fast Swap</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Stations;
