import { ButtonSelect, ThemeContainer } from "./styles";

export type ColorTheme = 'default' | 'orange' | 'beige' | 'blue' | 'purple';

export interface ThemeSelect{
  themeSelect : (theme:ColorTheme) => void
}

export function ThemeSelect({themeSelect}: ThemeSelect){

  return (
    <ThemeContainer>
      <h4>Theme</h4>
      <div>
        <ButtonSelect variant="default" onClick={() => themeSelect('default')}/>
        <ButtonSelect variant="beige" onClick={() => themeSelect('beige')}/>
        <ButtonSelect variant="blue" onClick={() => themeSelect('blue')}/>
        <ButtonSelect variant="orange" onClick={() => themeSelect('orange')}/>
        <ButtonSelect variant="purple" onClick={() => themeSelect('purple')}/>
      </div>
    </ThemeContainer>
  )
}