import * as C from "./styles"

export function Button({ children, ...rest }) {
  return <C.ButtonAll {...rest}>{children}</C.ButtonAll>;
}
