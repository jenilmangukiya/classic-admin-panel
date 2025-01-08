import Box from '@mui/material/Box';

export default function AuthBackground() {
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(18px)',
        zIndex: -1,
        bottom: '-10%',
        left: '-28%',
        transform: 'inherit'
      }}
    >
      <img src="/only_logo.png" width={800} height={800}></img>
    </Box>
  );
}
