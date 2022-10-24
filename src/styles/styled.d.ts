// import original module declarations
import "styled-components";
import { theme } from ".";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
  }
}
