import * as C from "./styles";

export function ErrorMessage({ children, ...rest }) {
  return <C.Error {...rest}>{children}</C.Error>;
}
