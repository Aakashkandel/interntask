import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Task4/Navbar';

const users = [
    { id: 1, name: "Aakash Kandel", address: "Gaindakot" },
    { id: 2, name: "Lalit Bhusal", address: "Chitwan" },
    { id: 3, name: "Sujan Kandel", address: "Gaindakot" },
    { id: 4, name: "Shiksha Bhusal", address: "Kathmandu" },
    { id: 5, name: "Dinesh Bhusal", address: "Laxmipur" },
    { id: 6, name: "Himsagar Thapa Magar", address: "Kawasoti" },
    { id: 7, name: "Susmita Gyawali", address: "kawasoti" },
]

export default function Search() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState("");

    const HandleSearch = (e) => {
        setSearch(e.target.value);


    }

    useEffect(() => {

        if (search === "") {
            setData(0);

        } else {
            const filteredData = users.filter((user) => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            });
            setData(filteredData);
        }

    }, [search, data]);


    return (
        <>
        <Navbar/>
            <div>
                <div class="text-center font-semibold text-gray-200 text-xl bg-green-600 p-2">Vrit Technologies First Round
                </div>
                <div class="bg-gray-200 w-10/12  mx-auto  my-10 p-4 rounded-xl h-full">
                    <div>
                        <div class="text-center font-bold text-xl text-gray-700  ">Task1</div>

                    </div>

                    <div class="flex justify-center my-5 ">
                        <div class="font-semibold mx-5">
                            <h2 class="text-xl text-gray-700">Search User:</h2>
                        </div>
                        <div class="w-3/12">
                            <form action="">
                                <input
                                    class="px-2 py-1 rounded w-full border-gray-300 border-2 focus:border-blue-500 focus:outline-none"
                                    type="text" value={search} onChange={HandleSearch} name="search" id="search" placeholder="Search User" />


                            </form>
                        </div>



                    </div>


                    {
                        data.length > 0 ? (
                            <div class="bg-green-700 w-8/12 mx-auto p-6 rounded-lg shadow-lg">
                                <table class="min-w-full table-auto text-white">
                                    <thead class="bg-green-900">
                                        <tr class="text-left">
                                            <th class="px-4 py-2">Id</th>
                                            <th class="px-4 py-2">Name</th>
                                            <th class="px-4 py-2">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-gray-100">

                                        {data.map((user) => {
                                            return (
                                                <tr>
                                                    <td class="border px-4 py-2">{user.id}</td>
                                                    <td class="border px-4 py-2">{user.name}</td>
                                                    <td class="border px-4 py-2">{user.address}</td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        ) : (
                            <>
                                <div class="text-xl text-red-700 font-semibold text-center">No Data Found</div>
                                <div class=" text-gray-700 font-semibold">Note:Please Enter Below Users Name</div>


                            </>
                        )
                    }
                </div>

                <div class="bg-yellow-700 w-8/12 mx-auto p-6 rounded-lg shadow-lg">
                                <table class="min-w-full table-auto text-white">
                                    <thead class="bg-yellow-900">
                                        <tr class="text-left">
                                            <th class="px-4 py-2">Id</th>
                                            <th class="px-4 py-2">Name</th>
                                            <th class="px-4 py-2">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-gray-100">

                                        {users.map((user) => {
                                            return (
                                                <tr>
                                                    <td class="border px-4 py-2">{user.id}</td>
                                                    <td class="border px-4 py-2">{user.name}</td>
                                                    <td class="border px-4 py-2">{user.address}</td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
            </div>

        </>
    )
}
