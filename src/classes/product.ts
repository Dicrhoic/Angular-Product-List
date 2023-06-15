export class Product {

    constructor(
        public id: number,
        public name: string,
        public price: number,
        public currency: string,
        public vendor: string,
        public link: string,
        public description?: string,
    ) { }
}