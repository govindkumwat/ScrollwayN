import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";
import PostList from "@/app/components/PostList";
import { Button } from "@nextui-org/react";


async function getData(params) {
  try {
  const res = await fetch(`https://www.reddit.com/r/${params}.json`)
  if (!res.ok) {
    throw new Error('Failed to fetch data for you')
  }
 
  return res.json()
} catch(error) {
  console.log(error)
}
}
 

export default async function Home() {
  const params = 'wallpaper'
  const data = await getData(params)


  return (
   <main>
    <meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="image_url_here" />   
    <Navbar/>
    <PostList intialData = {data?.data} params={params}/>
   </main>
  );
}
