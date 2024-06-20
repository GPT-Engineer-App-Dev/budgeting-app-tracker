import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Budgeting App</h1>
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
                  <TableRow>
                    <TableCell>2023-10-01</TableCell>
                    <TableCell>Grocery Store</TableCell>
                    <TableCell>$50.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-10-02</TableCell>
                    <TableCell>Electricity Bill</TableCell>
                    <TableCell>$75.00</TableCell>
                  </TableRow>
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
                  <TableRow>
                    <TableCell>2023-10-01</TableCell>
                    <TableCell>Restaurant</TableCell>
                    <TableCell>$30.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-10-02</TableCell>
                    <TableCell>Internet Bill</TableCell>
                    <TableCell>$60.00</TableCell>
                  </TableRow>
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
                  <TableRow>
                    <TableCell>2023-10-01</TableCell>
                    <TableCell>Gas Station</TableCell>
                    <TableCell>$40.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-10-02</TableCell>
                    <TableCell>Water Bill</TableCell>
                    <TableCell>$25.00</TableCell>
                  </TableRow>
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