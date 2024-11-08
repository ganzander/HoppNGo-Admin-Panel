"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTheme } from "next-themes";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Total Users",
            "Total Revenue",
            "Task Completion",
            "New Clients",
          ].map((title, index) => (
            <Card className="border-black" key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-sm font-medium ">{title}</CardTitle>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.floor(Math.random() * 1000)}
                </div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Table */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
            <CardDescription>
              A list of recent customer signups.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "001",
                    name: "Alice Johnson",
                    email: "alice@example.com",
                    joined: "2023-04-01",
                  },
                  {
                    id: "002",
                    name: "Bob Smith",
                    email: "bob@example.com",
                    joined: "2023-04-05",
                  },
                  {
                    id: "003",
                    name: "Charlie Brown",
                    email: "charlie@example.com",
                    joined: "2023-04-10",
                  },
                ].map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell className="text-right">
                      {customer.joined}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
