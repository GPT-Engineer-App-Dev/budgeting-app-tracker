import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Budgeting App</div>
      <div className="space-x-4">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline">About</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;