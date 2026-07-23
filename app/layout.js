import "./globals.css";

import Navbar from "../components/Navbar";



export const metadata = {

title:
"LifeScience Intelligence",

description:
"Biomedical Knowledge Intelligence Platform"

};



export default function RootLayout({children}){


return (

<html lang="zh-CN">


<body>


<Navbar />


{children}


</body>


</html>


)

}
