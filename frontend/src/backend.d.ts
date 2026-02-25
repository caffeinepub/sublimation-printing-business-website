import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    productInterest: ProductCategory;
    phoneNumber: string;
}
export enum ProductCategory {
    clothing = "clothing",
    furniture = "furniture",
    appliances = "appliances",
    electronics = "electronics"
}
export interface backendInterface {
    getInquiry(index: bigint): Promise<Inquiry>;
    submitInquiry(name: string, email: string, phoneNumber: string, productInterest: ProductCategory, message: string): Promise<void>;
}
