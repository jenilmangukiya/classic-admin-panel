import { ReactNode } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

import getColors from './../../utils/getColors';

interface GetColorStyleProps {
  theme: any;
  color: string;
  type: string;
}

function getColorStyle({ theme, color, type }: GetColorStyleProps) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: lighter
      };
    default:
      return {
        color: main,
        background: lighter
      };
  }
}

interface GetSizeStyleProps {
  size: string;
}

function getSizeStyle({ size }: GetSizeStyleProps) {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

const AvatarStyle = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size'
})(({ theme, color, type, size }: { theme: any; color: string; type: string; size: string }) => ({
  ...getSizeStyle({ size }),
  ...getColorStyle({ theme, color, type }),
  ...(size === 'badge' && {
    borderColor: theme.palette.background.default
  })
}));

interface AvatarProps {
  children?: ReactNode;
  color?: string;
  type?: string;
  size?: string;
  [key: string]: any;
}

export default function Avatar({ children, color = 'primary', type, size = 'md', ...others }: AvatarProps) {
  const theme = useTheme();

  return (
    <AvatarStyle theme={theme} color={color} type={type || ''} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
}
