import Layout from '../../Components/Layout'
import { useState } from 'react'
import { UserCircleIcon } from "@heroicons/react/24/solid"

const SignIn = () => {
  // Estado para almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Estado para almacenar mensajes de error
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar lógica para enviar los datos a un servidor para autenticación
    // Por ahora, solo mostraremos los datos en la consola
    console.log('Username:', username);
    console.log('Password:', password);

    // Restart form
    setUsername('');
    setPassword('');

    // Error message 
    setError('');
  };

  return (
    <Layout>
    <h2 className="text-3xl font-bold mb-4">Sign In</h2>
    <div className=" flex flex-col rounded-lg  bg-gray-200 lg:w-96 w-88 shadow-lg p-8 text-gray-500 h-[450px] mt-20 items-center justify-center">
      
      {error && <p className="error-message">{error}</p>}
      <form
      className=' rounded-lg flex flex-col ' 
      onSubmit={handleSubmit}>
        <UserCircleIcon className="w-48 h-44 mb-8 ml-4  text-gray-300" />
        <div className="flex justify-center  ">
          
          <input
            className="mb-4 rounded-lg focus:outline-none pl-10 p-2"
            type="text"
            id="username"       
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder='Enter your email'
          />
        </div>
        <div className="">
          <input 
            className="mb-4 rounded-lg focus:outline-none pl-10 p-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>
        <button 
          className='bg-black text-white p-4 w-full rounded-lg'
          type="submit">LOGIN</button>
      </form>
    </div>
    </Layout>
  );
};

export default SignIn