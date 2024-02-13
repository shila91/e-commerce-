import Layout from '../../Components/Layout';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'; // Asegúrate de importar el componente CheckoutSideMenu

function MyAccount() {
    return (
        <Layout>
            <div className='flex flex-col mt-10 items-center'>
                <p className='text-3xl font-bold'>Tu bolsa está vacía</p>
                <p>Los artículos permanecen en tu bolsa durante 60 minutos y luego van a tus artículos guardados. ¡Accede para ver tu bolsa y comprar!</p>
            </div>
            <CheckoutSideMenu /> {/* Aquí incluyes el CheckoutSideMenu */}
        </Layout>
    );
}

export default MyAccount;
