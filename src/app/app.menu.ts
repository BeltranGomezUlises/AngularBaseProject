import { MenuItem } from 'src/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text:"Dashboard",
        icon:"dashboard",
        route:"/dashboard",
        submenu: null
    },
    {
        text:"Countries",
        icon:"terrain",
        route:"/contries",
        submenu: null
    },
    {
        text:"Settings",
        icon:"settings",
        route:"/settings",
        submenu: null
    }
]