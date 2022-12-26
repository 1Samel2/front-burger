import * as C from "./styles"

export default function Button({ children, ...rest }) {
  return <C.ButtonAll {...rest}>{children}</C.ButtonAll>;
}
