export interface IDataTours {
    id: string;
    title: string;
    city: string;
    address: string;
    distance: number;
    price: number;
    maxGroupSize: number;
    desc: string;
    reviews: Review[];
    avgRating: number | string;
    photo: string;
    featured: boolean;
}
interface Review {
    name: string;
    rating: number;
}
