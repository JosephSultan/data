import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ArrowTrendingUpIcon from '@heroicons/react/24/solid/ArrowTrendingUpIcon';
import ArrowTrendingDownIcon from '@heroicons/react/24/solid/ArrowTrendingDownIcon';
import FaceSmileIcon from '@heroicons/react/24/solid/FaceSmileIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'CSAT',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <FaceSmileIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Top Closers',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <ArrowTrendingUpIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Least Closers',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <ArrowTrendingDownIcon />
      </SvgIcon>
    )
  },
  
];
