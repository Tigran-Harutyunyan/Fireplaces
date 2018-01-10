 interface ISliderItem {
    id : number,
    name : string,
    description : string,
    image : string,
    imgUrl : string
}
interface EnumSizeItem {
    id : number 
    name : number 
    isChecked: boolean 
}
interface EnumHeatOutputRangeItem {
    id : number 
    name : number 
    isChecked: boolean
}
interface EnumPriceRangeItem {
    id : number 
    name : number 
    isChecked: boolean  
} 
interface EnumFuelTypeItem {
    id : number,
    name : string,
    description : string,
    image : string,
    imgUrl : string,
    isChecked: boolean  
} 
interface EnumFireplaceItem {
    id : number 
    name : string 
    description : string 
    image : string 
    imgUrl : string 
    isChecked: boolean  
} 
interface ICustomData {
    phone : string
    email : string
    address : string
    copyright : string
    facebook_link : string
    twitter_link : string
    instagram_link : string
    google_plus_link : string
    about_text : string
    meta_title : string
    meta_keywords : string
    meta_description : string
}
interface IProduct {
    id : number
    name : string
    description : string
    image : string
    additional_product_features : string
    product_code : string
    heat_output : string
    price : string
    fireplace_size : string
    fuelType : string
    fireplaceType : string
}
export interface IServerData {
    slider : Array < ISliderItem >  
    gallery : Array < ISliderItem > 
    services : Array < ISliderItem >
    fuelTypes: Array < EnumFuelTypeItem >
    fireplaceTypes: Array < EnumFireplaceItem >
    fireplaceSizeRanges: Array < EnumSizeItem >
    heatOutputRanges: Array < EnumHeatOutputRangeItem >
    testimonials: Array < ISliderItem >
    fireplaceOptionsAndAccessories: Array < ISliderItem >
    products : Array < IProduct >  
    priceRanges: Array < EnumPriceRangeItem > 
    custom_data :  ICustomData   
}
 