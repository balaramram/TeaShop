

export const NavBar_data =[
    {id:1,
        title:"HOME",
        first_level:[
            {title:"Main Home",path:"/"},
            {title:"Tea Shop",path:"teaShop"},
            {title:"Tea House",path:"teaHouse"},
            {title:"Landing",path:"landing"},
        ]
    },

    {id:2,
        title:"PAGES",
        first_level:[
            {title:"About Us",path:"aboutUs"},
            {title:"Our Team",path:"ourTeam"},
            {title:"Our Menu",path:"ourMenu"},
            {title:"Booking",path:"booking"},
            {title:"Our Location",path:"ourLocation"},
            {title:"Contact Us",path:"contactUs"},
        ]
    },
    {id:3,
        title:"SHOP",
        first_level:[
            {title:"Shop List",path:"shopList"},
            {title:"Shop Single",path:"shopSingle"},
            {title:"Shop Slider",path:"shopSlider"},
            {
                title:"Shop Layouts",
                symbol:"→",
                second_level:[
                    {title:"Three Columns",path:"threeColumns"},
                    {title:"Three Columns Wide",path:"threeColumnsWide"},
                    {title:"Four Columns",path:"fourColumns"},
                    {title:"Four Columns Wide",path:"fourColumnsWide"},
                    {title:"Five Colunms Wide",path:"fiveColunmsWide"},
                ]
            },
            {
                title:"Shop Pages",
                symbol:"→",
                second_level:[
                    {title:"My Account",path:"myAccount"},
                    {title:"Cart",path:"cart"},
                    {title:"Checkout",path:"checkout"},
                ]
            }
        ]
    },
    {id:4,
        title:"BLOG",
        first_level:[
            {title:"Blog Right Slider",path:"blogRightSlider"},
            {title:"Blog Left Slidebar",path:"blogLeftSlider"},
            {title:"Blog No Slidebar",path:"blogNoSlider"},
            {title:"Blog Slider",path:"blogSlider"},
            {title:"Blog Pinterest",path:"blogPinterest"},
            {
                title:"Post Types",
                symbol:"→",
                second_level:[
                    {title:"Standard Post",path:"standardPost"},
                    {title:"Link Post",path:"linkPost"},
                    {title:"Quote Post",path:"quotePost"},
                    {title:"Audio Post",path:"audioPost"},
                    {title:"Galery Post",path:"galeryPost"}, 
                    {title:"Video Post",path:"videoPost"}, 
                    {title:"No Slidebar Post",path:"noSlidebarPost"}, 
                ]
            },
        ]
    },
]