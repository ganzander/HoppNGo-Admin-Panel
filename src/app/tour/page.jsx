"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const tours = [
  {
    id: 1,
    name: "Acme Corp",
    contact: "John Doe",
    email: "john@acme.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Globex Corporation",
    contact: "Jane Smith",
    email: "jane@globex.com",
    phone: "098-765-4321",
  },
  {
    id: 3,
    name: "Soylent Corp",
    contact: "Bob Johnson",
    email: "bob@soylent.com",
    phone: "555-123-4567",
  },
  {
    id: 4,
    name: "Initech",
    contact: "Michael Bolton",
    email: "michael@initech.com",
    phone: "555-867-5309",
  },
];

export default function page() {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tours</h1>
        <Button
          className="hidden sm:flex"
          onClick={() => router.push("/tour/add-tour")}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Tour
        </Button>
        <Button
          className="sm:hidden"
          onClick={() => router.push("/tour/add-tour")}
          size="icon"
        >
          <PlusCircle className="h-4 w-4" />
          <span className="sr-only">Add Tour</span>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden lg:table-cell">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tours.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell className="font-medium">{tour.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {tour.contact}
                </TableCell>
                <TableCell>{tour.email}</TableCell>
                <TableCell className="hidden lg:table-cell">
                  {tour.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
