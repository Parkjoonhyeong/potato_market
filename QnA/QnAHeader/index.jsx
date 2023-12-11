// import React, { useEffect, useState } from 'react'
// import { Inners } from '../../styles/Common'
// import { Headers } from './Style'
// import img_cc_logotype from '../../assets/images/img_cc_logotype.svg'
// import img_cc_logotype_brand from '../../assets/images/img_cc_logotype_brand.svg'

// const Header = () => {
//   const [scrollY, setScrollY] = useState(0)

//   const handleNavigation = (e) => {
//     const window = e.currentTarget
//     setScrollY(window.pageYOffset)
//   }

//   useEffect(() => {
//     setScrollY(window.pageYOffset)
//     window.addEventListener('scroll', (e) => handleNavigation(e))
//   }, [])

//   return (
//     <Headers className={scrollY > 0 ? 'on' : ''}>
//       <Inners>
//         <div className="header-logo">
//           <img
//             src={scrollY > 0 ? img_cc_logotype_brand : img_cc_logotype}
//             alt="감자마켓 로고"
//           />
//         </div>
//       </Inners>
//     </Headers>
//   )
// }

// export default Header
