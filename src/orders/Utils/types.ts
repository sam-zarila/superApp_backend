export type orderparams={
    OrderNumber:string;
    CustomerName:string;
    ProductName:string;
    Price:string;
    Quantity:number;
    Description:string;
    Location:string;
    PhoneNumber:string;
    OrderDate:Date;
  


}
export type SellersApplicationFormparams={
    FirstName:string;
    SurName:string;
    NationalID:string;
    BusinessName:string;
    PhoneNumber:string;
    Address:string;
    BusinessDescription:string;
    ApplicationDate:Date;

}
export interface SellersApplicationparams{
    FirstName?:string;
    SurName?:string;
    NationalID?:string;
    BusinessName?:string;
    PhoneNumber?:string;
    Address?:string;
    BusinessDescription?:string;
    ApplicationDate?:Date;

}

export interface UpdateOrderParams {
    OrderNumber?:string;
    CustomerName?:string;
    ProductName?:string;
    Price?:number;
    Quantity?:number;
    Description?:string;
    Location?:string;
    PhoneNumber?:string;
    OrderDate?:Date;
  
  }
  



