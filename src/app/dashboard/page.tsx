import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Dashboard(){

    return(

        <Layout>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <Card
                    title="Saldo"
                    value="R$ 25.890,00"
                />

                <Card
                    title="Receitas"
                    value="R$ 9.250,00"
                />

                <Card
                    title="Despesas"
                    value="R$ 3.410,00"
                />

            </div>

            <div
                className="
                mt-10
                bg-white
                rounded-xl
                shadow
                p-8
                "
            >

                <h2 className="text-xl font-bold mb-6">
                    Últimas Transações
                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="text-left border-b">

                            <th className="pb-4">Descrição</th>
                            <th className="pb-4">Data</th>
                            <th className="pb-4">Valor</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-b">

                            <td className="py-4">
                                Mercado
                            </td>

                            <td>
                                04/08
                            </td>

                            <td className="text-red-600">
                                -R$120
                            </td>

                        </tr>

                        <tr className="border-b">

                            <td className="py-4">
                                Salário
                            </td>

                            <td>
                                01/08
                            </td>

                            <td className="text-green-600">
                                +R$4200
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </Layout>

    )

}