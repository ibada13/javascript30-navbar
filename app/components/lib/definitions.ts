export interface Link { 
    logo: JSX.Element, 
     title: string, 
     details :string,
     href :string,
}
export interface NavItem {
    label: string, 
    links:Link[],
}