export class PCPart {

    constructor(
        public id: number,
        public name: string,
        public productID: string,
        public type: string,
        public image: string,
        public description?: string,
        public price?: number,
    ) { }
}

export const PARTS: PCPart[] = [
    {
        id: 1, name: 'Western Digital WD Black 2TB HD', type: 'Storage', productID: 'WD2003FZEX',
        image: 'https://files.pccasegear.com/images/1603764914-wd-black-new-black-thb.jpg', price: 169,
    },
    {
        id: 2, name: 'Phanteks Eclipse P300A Mesh Edition TG Black Case', type: 'Case', productID: 'PH-EC300ATG_BK01',
        image: 'https://files.pccasegear.com/images/PH-EC300ATG-BK01-thumb.jpg'
    },
    {
        id: 3, name: 'Corsair Vengeance LPX 16GB (2X8) 2400MHz CL16 DDR4', type: 'Memory', productID: 'CMK16GX4M2A2400C16 ',
        image: 'https://files.pccasegear.com/images/1585613920-CMK16GX4M2A2133C13-thb3.jpg', price: 65
    },
    {
        id: 4, name: 'Intel Core i5 11400', type: 'CPU', productID: 'BX8070811400',
        image: 'https://files.pccasegear.com/images/1617752606-BX8070811400-thb.jpg',
    },
    {
        id: 5, name: 'ASUS ROG Strix B560-F Gaming Wi-Fi', type: 'Motherboard', productID: 'ROG-STRIX-B560-F-GAMING-WIFI',
        image: 'https://files.pccasegear.com/images/1616715084-ROG-STRIX-B560-F-GAMING-WIFI-thb.jpg',
    },
    {
        id: 6, name: 'Samsung 970 EVO Plus NVMe SSD', type: 'Storage', productID: 'MZ-V7S500BW',
        image: 'https://files.pccasegear.com/images/1585723277-MZ-V7S1T0BW-thb3.jpg',
    },
    {
        id: 7, name: 'ASUS GeForce RTX 3060 Ti Dual OC LHR 8GB', type: 'Motherboard', productID: 'DUAL-RTX3060TI-O8G-V2 ',
        image: 'https://files.pccasegear.com/images/1606798897-DUAL-RTX3060TI-O8G-thb.jpg',
    },

    
];

