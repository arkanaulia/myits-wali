import { Image } from "@chakra-ui/react";



// Admin Imports

// Auth Imports
import { IRoute } from "types/navigation";

const routes: IRoute[] = [
  {
    name: "Beranda",
    layout: "/dashboard",
    path: "/beranda",
    icon: <Image src='/img/icons/home.png' boxSize='6' />,
  },
  {
    name: "Kemajuan Studi",
    layout: "/dashboard",
    path: "/studi",
    icon: (
      <Image src='/img/icons/studi.png' boxSize='6' />
    ),
    secondary: true,
  },
  {
    name: "Ekstrakurikuler",
    layout: "/dashboard",
    path: "/ekstrakurikuler",
    icon:<Image src='/img/icons/ekskul.png' boxSize='6' />,
  },
  {
    name: "Presensi",
    layout: "/dashboard",
    path: "/presensi",
    icon: <Image src='/img/icons/absen.png' boxSize='6' />,
  },
  {
    name: "Biaya Pendidikan",
    layout: "/dashboard",
    path: "/biaya",
    icon: <Image src='/img/icons/biaya.png' boxSize='6' />,
  },
];

export default routes;
