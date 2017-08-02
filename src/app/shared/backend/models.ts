export interface Item {
    name: string;
    url: string;
    count: number;
}
export interface Column {
    name: string;
    url: string;
    url_icon: string;
    isclicked: boolean;
    count: number;
}
export interface Image {
    columnSize: string;
    column: Column[];
}
