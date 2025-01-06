import gallery1 from '../public/images/galleryImg-1.jpg'
import gallery2 from '../public/images/galleryImg-2.jpg'
import gallery3 from '../public/images/galleryImg-3.jpg'
import gallery4 from '../public/images/galleryImg-4.jpg'
import gallery5 from '../public/images/galleryImg-5.jpg'
import gallery6 from '../public/images/galleryImg-6.jpg'
import gallery7 from '../public/images/galleryImg-7.jpg'
import gallery8 from '../public/images/galleryImg-8.jpg'
import gallery9 from '../public/images/galleryImg-9.jpg'
import gallery10 from '../public/images/galleryImg-10.jpg'
import gallery11 from '../public/images/galleryImg-11.jpg'
import gallery12 from '../public/images/galleryImg-12.jpg'
import gallery13 from '../public/images/galleryImg-13.jpg'
import design1 from '../public/svgs/design-1.svg'
import design2 from '../public/svgs/design-2.svg'
import design3 from '../public/svgs/design-3.svg'
import floorDesign from '../public/images/floor_design_layout.jpg'
import customDesign from '../public/images/custom_tile_design.jpg'
import tileInstallation from '../public/images/tile_installation_services.jpg'

export const GALLERY_PAGE_IMAGES = [
  {id: 1, galleryImg: gallery1},
  {id: 2, galleryImg: gallery2},
  {id: 3, galleryImg: gallery3},
  {id: 4, galleryImg: gallery4},
  {id: 5, galleryImg: gallery5},
  {id: 6, galleryImg: gallery6},
  {id: 7, galleryImg: gallery7},
  {id: 8, galleryImg: gallery8},
  {id: 9, galleryImg: gallery9},
  {id: 10, galleryImg: gallery10},
  {id: 11, galleryImg: gallery11},
  {id: 12, galleryImg: gallery12},
  {id: 13, galleryImg: gallery13},
  {id: 14, galleryImg: gallery1},
  {id: 15, galleryImg: gallery2}
]


export const DESIGNER_IMAGES =  [
  {id:1, image: design1},
  {id:2, image: design2},
  {id:3, image: design3},
]

export const PROJECT_PAGE_IMAGES = [
  {id: 1, image: gallery1, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
  {id: 2, image: gallery10, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
  {id: 3, image: gallery3, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
  {id: 4, image: gallery11, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
  {id: 5, image: gallery12, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
  {id: 6, image: gallery13, publicity: 'Featured in Time magazine, Nov 2021', designer1: 'Fabien Charuau',  designer2: 'Les Bouchons'},
]

export const OUR_SERVICES_PAGE = [
  {
    id: 1, 
    image: floorDesign,
    designType: 'FLOOR DESIGN LAYOUTS',
    designInfo: [
      {
        id:1, 
        info: `At Bharat Floorings, we understand the importance of a tailored approach to flooring. That's why we offer exclusive design services at affordable rates, ensuring you get the floor you envision.`,
      },
      {
        id: 2,
        info: `Our in-house designers are ready to collaborate on color choices and layouts. Can't visit us? Simply email your drawings, and our skilled team will guide you through the layout process. Once you're delighted with the design, we seamlessly integrate it into Autocad, and you can place your order. While this meticulous process takes time, plan accordingly for your project timelines.`
      }
    ] 
  },{
    id: 2, 
    image: customDesign,
    designType: 'CUSTOM TILE DESIGN',
    designInfo: [
      {
        id:1, 
        info: `Explore a new realm of creativity with our latest offering – design your own tile! At Bharat Floorings, we turn your pictures or drawings into tangible, bespoke tiles through our innovative processes.`,
      },
      {
        id: 2,
        info: `The process involves creating samples for your approval before moving into full-scale production once the design is finalized. While it may take some time, the outcome is an exceptionally unique addition to your space! But that's not all – our dedicated team ensures a seamless experience, guiding you through each step of the process. Elevate your interior aesthetics with personalized tiles that reflect your style. Transform your ideas into reality with our custom tile design service.`
      }
    ]  
  },{
    id: 3, 
    image: tileInstallation,
    designType: 'TILE INSTALLATION SERVICES',
    designInfo: [
      {
        id:1, 
        info: `Discover the excellence of our installation partners - Gaaia Contractors, a leading name in professionally managed, high-quality civil contracting services. They specialize in providing turnkey solutions to meet all your installation requirements. Over the years, Gaaia Contractors has built a strong reputation, delivering outstanding projects for prestigious organizations.`,
      },
      {
        id: 2,
        info: `Our joint portfolio includes noteworthy projects for renowned entities such as Air India, Essar, LIC, NTPC, BEST, BSES, and more. We take pride in contributing to iconic structures like the Birla Temple in Revdanda, the head offices of Western Railway, Brihan Mumbai Municipal Corporation, and the TATAs at Bombay House. Gaaia Contractors has left its mark in diverse sectors, from corporate offices (Hindustan Lever, ICICI, Grey Worldwide) to public buildings (Salar Jung Museum, Tata Memorial Hospital, World Trade Centre) and residential landmarks (Maker Towers, Woodlands, Jindal Mansion).`
      }
    ] 
  },
]