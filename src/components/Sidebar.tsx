// src/components/Sidebar.tsx
import React from 'react';
import { Filters } from '../types/Product'; // Adjust the path as necessary
import '../styles/Sidebar.scss';



interface SidebarProps {
  filters: Filters;
  updateFilters: (newFilters: Filters) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, updateFilters }) => {
  // Implement filter change handlers here

  return (
    <aside className="sidebar">
      {/* Implement UI for brand, price range, and ratings filters */}
    </aside>
  );
};

export default Sidebar;
