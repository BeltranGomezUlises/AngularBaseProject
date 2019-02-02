import { MenuItem } from 'src/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: "Dashboard",
        icon: "dashboard",
        route: "/authenticated/dashboard",
        submenu: null
    },
    {
        text: "Countries",
        icon: "terrain",
        route: null,
        submenu: [
            {
                text: "Select",
                icon: "arrow_right_alt",
                route: null,
                submenu: [
                    {
                        text: "México",
                        icon: "satellite",
                        route: "/authenticated/countries/1",
                        submenu: null
                    },
                    {
                        text: "USA",
                        icon: "satellite",
                        route: "/authenticated/countries/2",
                        submenu: null
                    },
                    {
                        text: "Europe",
                        icon: "satellite",
                        route: "/authenticated/countries/3",
                        submenu: null
                    }
                ]
            },
            {
                text: "one",
                icon: "aspect_ratio",
                route: null,
                submenu: null
            }
        ]
    },
    {
        text: "Maintenance",
        icon: "aspect_ratio",
        route: null,
        submenu: [
            {
                text: "Country list",
                icon: "playlist_add_check",
                route: "/authenticated/countries-maintenance",
                submenu: null
            },
            {
                text: "Settings",
                icon: "settings",
                route: "/authenticated/settings",
                submenu: null
            }
        ]
    }    
]