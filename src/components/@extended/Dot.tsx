import { CSSProperties } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import getColors from './../../utils/getColors';

interface DotProps {
  color?: string;
  size?: number;
  variant?: 'outlined' | 'filled';
  sx?: CSSProperties;
}

export default function Dot({ color, size, variant, sx }: DotProps) {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && { border: `1px solid ${main}` }),
        ...sx
      }}
    />
  );
}
