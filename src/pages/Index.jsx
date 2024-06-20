import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/ui/date-picker"; // Import DatePicker component
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [transactions, setTransactions] = useState([
    { date: "2023-10-01", description: "Grocery Store", amount: "$50.00", account: "account1" },
    { date: "2023-10-02", description: "Electricity Bill", amount: "$75.00", account: "account1" },
    { date: "2023-10-01", description: "Restaurant", amount: "$30.00", account: "account2" },
    { date: "2023-10-02", description: "Internet Bill", amount: "$60.00", account: "account2" },
    { date: "2023-10-01", description: "Gas Station", amount: "$40.00", account: "account3" },
    { date: "2023-10-02", description: "Water Bill", amount: "$25.00", account: "account3" },
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (!selectedDate) return true;
    return transaction.date === selectedDate.toISOString().split("T")[0];
  });

  return (
    <div className="h-screen w-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Budgeting App</h1>
      <div className="mb-4">
        <DatePicker selected={selectedDate} onSelect={handleDateChange} />
        <Button onClick={() => setSelectedDate(null)} className="ml-2">Clear Filter</Button>
      </div>
      <Tabs defaultValue="account1" className="w-full max-w-4xl">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="account1">Bank Account 1</TabsTrigger>
          <TabsTrigger value="account2">Bank Account 2</TabsTrigger>
          <TabsTrigger value="account3">Bank Account 3</TabsTrigger>
        </TabsList>
        <TabsContent value="account1">
          <Card>
            <CardHeader>
              <CardTitle>Transactions for Bank Account 1</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions
                    .filter((transaction) => transaction.account === "account1")
                    .map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account2">
          <Card>
            <CardHeader>
              <CardTitle>Transactions for Bank Account 2</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions
                    .filter((transaction) => transaction.account === "account2")
                    .map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account3">
          <Card>
            <CardHeader>
              <CardTitle>Transactions for Bank Account 3</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions
                    .filter((transaction) => transaction.account === "account3")
                    .map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;