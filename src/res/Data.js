import Images from "../assets/images/images";
// Temporay Data until we connect with Firebase

export const DataD = [
    {

        type: "lixrr",
        name: 'Hoodies',
        seeall: 'See All ',
        style: {
            height: 170,
            width: 170,
            resizeMode: "contain",
            borderRadius: 25,


        },
        clothis: [

            {
                title: "Hoodie White ",
                completed: false,
                img: Images.hody2(),
            },

            {
                title: "Hoodie Black ",
                completed: true,
                img: Images.hody1(),

            },

            {
                title: "Hoodie Blue",

                completed: true,
                img: Images.hody3(),


            },
        ]
    },
    {
        type: "lixrr2",
        name: 'shoes',
        seeall: 'See All ',
        style: {
            height: 130,
            width: 210,
            // borderRadius: 75,
            // borderColor: 'blue',




        },
        clothis: [


            {
                title: "Air Force ",
                completed: false,
                img: Images.shooes11(),
            },

            {
                title: "Air jordan 1 retro ",
                completed: true,
                img: Images.shooes1(),

            },

            {
                title: "Air jordan 1 low se ",

                completed: true,
                img: Images.shooes3(),


            },

            {
                title: " Air jordan 4 blue",
                completed: false,
                img: Images.shooes2()
            }
        ]
    },
    {
        type: "lixrr3",
        name: 'pants',
        seeall: 'See All ',
        style: {
            height: 160,
            width: 170,
            borderRadius: 40,
            marginLeft: 10,
            // borderWidth: 2,
            borderColor: '#000',






        },
        clothis: [


            {
                title: "Club Mens Chino Pants ",
                completed: false,
                img: Images.pants1(),
            },

            {
                title: "Mens BasketBall Pants  ",
                completed: true,
                img: Images.pants2(),

            },

            {
                title: "SportLixrr White Pants ",

                completed: true,
                img: Images.pants3(),


            },

            {
                title: "SportLixrr Black Pants",
                completed: false,
                img: Images.pants4()
            },

            {
                title: "SportswearClub Mens Pants",
                completed: false,
                img: Images.pants6()
            },

            {
                title: "sportswear Mens Joggers",
                completed: false,
                img: Images.pants5()
            }
        ]
    },

]
