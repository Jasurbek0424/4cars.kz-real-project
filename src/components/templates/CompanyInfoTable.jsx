// eslint-disable-next-line no-unused-vars
import React from 'react';

const CompanyInfoTable = () => {
    return (
        <>
            <div className="flex justify-center w-full xl mx-auto mt-8 font-body 
            2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs">
                <table className="table-auto border border-collapse border-gray-500">
                    <tbody>
                        <tr className=''>
                            <td className="border p-2 font-semibold">Наименование:</td>
                            <td className="border p-2">ТОО “ADAK W&T”</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">ИИН:</td>
                            <td className="border p-2">131240018078</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Юридический адрес:</td>
                            <td className="border p-2">Республика Казахстан, г. Алматы ул. Казыбаева, 270 а</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">ИИК:</td>
                            <td className="border p-2">KZ086018771000401241</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Банк:</td>
                            <td className="border p-2">АО «Народный Банк Казахстан»</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">БИК Банка:</td>
                            <td className="border p-2">HSBKKZK</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CompanyInfoTable;