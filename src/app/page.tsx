import Sidebar from "./componenets/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <Sidebar/>
      <h1 className="text-xl ml-64 mt-8">Home page</h1>
      <ul className="flex justify-center flex-col ml-64 mt-10">
        <li>
          <Link href={'/dashboard'}>      
             <Image 
                alt="dashboard"
                src={'/images/dashboard.png'}
                width='500'
                height='200'
                className="mb-10 hover:scale-105"
              />
          </Link>
          </li>
        <li>
          <Link href={'/companies'}>  
            <Image 
                alt="companies"
                src={'/images/companies.png'}
                width='500'
                height='200'
                className="hover:scale-105"
             />
             </Link>
        </li>
      </ul>
    </main>
  );
}
