const initialState = {
    Paket: [
        {
            id: 1,
            title: "Basic",
            price: 45000,
            list1: "Kelola stok produk dengan mudah",
            list2: "Laporan penjualan",
            list3: "Jual produk digital"
        },
        {
            id: 2,
            title: "Premium",
            price: 50000,
            list1: "Semua fitur pada paket basic",
            list2: "Dukungan printer struk",
            list3: "Live support 24 jam"
        },
        {
            id: 3,
            title: "Super POS",
            price: 70000,
            list1: "Semua fitur pada paket premium",
            list2: "Laporan penjualan",
            list3: "Jual produk digital"
        }
    ],
    DataTable: [
        {
            id: 1,
            time: "09.21",
            konten: "Budi Cahyadi",
            barang: "Kipas Angin",
            harga_barang: 100000,
            qty: 1,
            total: 100000
        },
        {
            id: 2,
            time: "13.50",
            konten: "Ahmad Santoso",
            barang: "Sapu Ijuk",
            harga_barang: 10000,
            qty: 1,
            total: 20000
        },
        {
            id: 3,
            time: "15.00",
            konten: "Yulia",
            barang: "Rinso",
            harga_barang: 35000,
            qty: 1,
            total: 140000
        },
        {
            id: 3,
            time: "16.00",
            konten: "Evelyn",
            barang: "Molto",
            harga_barang: 35000,
            qty: 1,
            total: 140000
        },
        {
            id: 3,
            time: "18.30",
            konten: "Tara",
            barang: "Telur Ayam Kampung",
            harga_barang: 75000,
            qty: 1,
            total: 75000
        }
    ],
    Summary: [
        {
            id: 1,
            title: "Masa berlaku langganan",
            total: "15 Juli 2020"
        },
        {
            id: 2,
            title: "Total Produk",
            total: "500"
        },
        {
            id: 3,
            title: "Produk Terjual",
            total: "1.000"
        },
        {
            id: 4,
            title: "Total Keuntungan",
            total: 15000000
        }
    ]
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }

}
