import Layout from '../components/Layout'
import Cliente from '../components/Cliente'
import { useMutation, gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Link from 'next/link'

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor{
    obtenerClientesVendedor{
      nombre
      apellido
      empresa
      email
      id
    }
  }
`

const Index = () => {

  const router = useRouter()

  // Consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO)
  console.log(data)

  if (loading) return 'Cargando..'

  // Si no hay información
  if (!data.obtenerClientesVendedor) {
    return router.push('/login')
  }

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>

        <Link href="/nuevocliente">
          <a className="bg-blue-800 py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-200 mb-3 uppercase font-bold">Nuevo Cliente</a>
        </Link>

        <table className="table-auto shadow-md mt-10 w-full w-lg">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="w-1/5 py-2">Nombre</th>
              <th className="w-1/5 py-2">Empresa</th>
              <th className="w-1/5 py-2">Email</th>
              <th className="w-1/5 py-2">Eliminar</th>
              <th className="w-1/5 py-2">Editar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.obtenerClientesVendedor.map(cliente => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
              />
            ))}
          </tbody>

        </table>
      </Layout>
    </div>
  )
}

export default Index