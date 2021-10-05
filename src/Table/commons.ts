export interface ComputerTypeInfo {
    room: number,
    codename: string,
    type: string,
    processor: string,
    memory: string,
    graphics: string,
    color: string
}

export const STATIC_INFO = (isDark: boolean): ComputerTypeInfo[] => [
    {
        room: 2041,
        codename: "Red",
        type: "Apple iMac Late 2013",
        processor: "Intel Core i5-4570",
        memory: "8GB",
        graphics: "nVidia GeForce GT755M Mac Edition [GK107M]",
        color: "red"
    },
    {
        room: 2042,
        codename: "Pink",
        type: "Dell Precision Tower 3620",
        processor: "Intel Xeon E3-1240 v6",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "rgb(255, 102, 255)"
    },
    {
        room: 2043,
        codename: "Orange",
        type: "Dell Precision Tower 3620",
        processor: "Intel Xeon E3-1240 v6",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "orange"
    },
    {
        room: 2044,
        codename: "Brown",
        type: "Dell Precision Tower 3620",
        processor: "Intel Xeon E3-1240 v6",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "brown"
    },
    {
        room: 2045,
        codename: "Green",
        type: "Dell Precision Tower 1700",
        processor: "Intel Xeon E3-1220 v3",
        memory: "8GB",
        graphics: "nVidia NVS 315 [GF119]",
        color: "green"
    },
    {
        room: 3041,
        codename: "Khaki",
        type: "Dell Precision Tower 3630",
        processor: "Intel Core i5-8500",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "rgb(173, 169, 110)"
    },
    {
        room: 3042,
        codename: "White",
        type: "Dell Precision Tower 3630",
        processor: "Intel Core i5-8500",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: isDark ? "white" : "#212529"
    },
    {
        room: 3043,
        codename: "Cyan",
        type: "Dell Precision Tower 3630",
        processor: "Intel Core i5-8500",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "cyan"
    },
    {
        room: 3044,
        codename: "Blue",
        type: "Dell Precision Tower 3630",
        processor: "Intel Core i5-8500",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "blue"
    },
    {
        room: 3045,
        codename: "Violet",
        type: "Dell Precision Tower 3630",
        processor: "Intel Core i5-8500",
        memory: "16GB",
        graphics: "nVidia Quadro P400 [GP107GL]",
        color: "violet"
    }
];

export interface ClassInfo {
    start: string;
    end: string;
    title: string;
}

export const NO_CLASS = 'brak zajęć';
export const AFTER_CLASSES = 'Zajęcia skończyły się';

export const DARK_COLORS = ['brown', 'white', 'blue', 'red', 'green'];
