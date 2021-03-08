import React from 'react';
import Box from '@material-ui/core/Box';
import { Input } from '@material-ui/core';

interface ViewHeaderProps {
  handleSearch: (event: any) => void;
}

const AppHeader: React.FC<ViewHeaderProps> = (({ handleSearch }: ViewHeaderProps) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box component="h2" fontWeight="500" fontSize="2rem" color="primary.main">Orders Management</Box>
    <Box display="flex" width="100%" justifyContent="space-between" p={1}>
      <Input placeholder="Search orders by parcel number..." className="HeaderSearch_Input" onChange={handleSearch} />
    </Box>
  </Box>
));

export default AppHeader;