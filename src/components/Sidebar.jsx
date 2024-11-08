"use client";
import { useEffect, useState } from "react";
import { Layout } from "lucide-react";
import { Building, Globe, MapPin, DollarSign, Map } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const sidebarItems = [
    { icon: Building, label: "Suppliers", link: "/supplier" },
    { icon: Globe, label: "Tours", link: "/tour" },
    { icon: MapPin, label: "Destinations", link: "/destinations" },
    { icon: DollarSign, label: "Sales", link: "/sales" },
    { icon: Map, label: "Tour Mapping", link: "/tour-mapping" },
  ];

  return (
    <aside
      className={`bg-card w-64 min-h-screen p-4 ${
        sidebarOpen ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex items-center mb-6">
        <Layout className="h-6 w-6 text-primary mr-2" />
        <span className="text-xl font-semibold">Dashboard</span>
      </div>
      <nav>
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center p-2 mt-2 rounded-lg hover:bg-accent transition-colors"
          >
            <item.icon className="h-5 w-5 text-muted-foreground mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
