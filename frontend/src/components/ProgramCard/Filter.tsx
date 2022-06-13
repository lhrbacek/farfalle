import { Select } from "@mantine/core";
import React from "react";

interface FilterProps {
  filter: string;
  setFilter: Function;
}

export default function Filter({ filter, setFilter }: FilterProps) {

  return (
    <Select
      label="Filter performances"
      placeholder="..."
      data={[
        { value: 'all', label: 'All' },
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This week' },
        { value: 'month', label: 'This month' },
      ]}
      onChange={(value) => setFilter(value)}
    />
  );
}
