export interface SystemCardObj {
    
    // bgPath:string,
    // logoPath:string,
    // systemName:string,
    // systemName2?:string,
    // description?:string,
    // primaryBtnText?:string,
    // secondaryBtnText?:string,
    // slogan?:string,
    [propName:string]:string,
}
export enum HomePageIndecator {
    SECTION1 = "#home-sction1",
    SECTION2 = "#home-sction2",
    SECTION3 = "#home-sction3",
    SECTION4 = "#home-sction4"
}
export enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BUTTOM
}