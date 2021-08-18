export interface Individual{
    indivId ?: number,
    firstName : string,
    lastName : string,
    age ?: number,
    gender ?: string,
    middleName ?: string,
    address ?: {
        street : string,
        city : string,
        state : string
    },
    image?: string
    isActive?: boolean,
    hide?: boolean 

}