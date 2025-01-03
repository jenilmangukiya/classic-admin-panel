import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MainCard from '../MainCard';

interface Menu {
  type?: string;
  title: string;
  url?: string;
  children?: Menu[];
  breadcrumbs?: boolean;
}

interface BreadcrumbsProps {
  navigation?: {
    items?: Menu[];
  };
  title?: boolean;
  [key: string]: any;
}

export default function Breadcrumbs({ navigation, title, ...others }: BreadcrumbsProps) {
  const location = useLocation();
  const [main, setMain] = useState<Menu | null>(null);
  const [item, setItem] = useState<Menu | null>(null);

  const getCollapse = (menu: Menu) => {
    if (menu.children) {
      menu.children.forEach((collapse) => {
        if (collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
      });
    }
  };

  useEffect(() => {
    navigation?.items?.forEach((menu) => {
      if (menu.type === 'group') {
        getCollapse(menu);
      }
    });
  }, [location.pathname, navigation]);

  // only used for component demo breadcrumbs
  if (location.pathname === '/breadcrumbs') {
    location.pathname = '/dashboard/analytics';
  }

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Typography component={Link} to={document.location.pathname} variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
        {main.title}
      </Typography>
    );
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false} sx={{ mb: 3, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography component={Link} to="/" color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">{item.title}</Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
}
