import { ReactNode } from "react";

// material-ui
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// third-party
import SimpleBar from "simplebar-react";
import { BrowserView, MobileView } from "react-device-detect";

// root style
const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      background: alpha(theme.palette.grey[500], 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));

// ==============================|| SIMPLE SCROLL BAR ||============================== //

interface SimpleBarScrollProps {
  children: ReactNode;
  sx?: object;
  other?: any; // Use a more specific type if you know the props passed here
}

const SimpleBarScroll: React.FC<SimpleBarScrollProps> = ({
  children,
  sx,
  ...other
}) => {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: "auto", ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </>
  );
};

export default SimpleBarScroll;