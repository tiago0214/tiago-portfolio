import { CtaLink, CtaContainer } from "./styles";

import CV from '../../../../assets/cv.pdf';

export function Cta(){
  return (
    <CtaContainer >
      <CtaLink href={CV} className="btn" target="_blank">View CV</CtaLink>
      <CtaLink href="#contact" className="btn btn-primary">Let's Talk</CtaLink>
    </CtaContainer>
  )
}

// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import PersonSearchIcon from '@mui/icons-material/PersonSearch';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#64CCC5',
//     },
//     secondary: {
//       main: '#E0C2FF',
//       light: '#F5EBFF',
//       contrastText: '#47008F',
//     },
//   },
// });

{/* <ThemeProvider theme={theme}>
    <Button 
      variant="outlined" 
      href={CV} 
      target="_blank" 
      size="large" 
      startIcon={<PersonSearchIcon/>}
    >View CV</Button>
    <Button 
      variant="contained" 
      href="#contact" 
      size="large" 
      startIcon={<RecordVoiceOverIcon />}
    >Let's Talk</Button>
  </ThemeProvider> */}