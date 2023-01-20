import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../constants/paths';

const listLink = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: LocalMallIcon,
    },
    {
        id: 2,
        label: 'Listar Produto',
        link: paths.ListProducts,
        icon: ShoppingCartIcon,
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon,
    }
]

export default listLink