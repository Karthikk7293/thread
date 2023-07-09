import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Post from '@/components/post/Post'

const inter = Inter({ subsets: ['latin'] })

const post = [
   { name: "karthi____", time: 2, likes: 40, replies: 30, message: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi minus atque earum fuga voluptatem voluptate ut doloribus? Odio soluta amet quidem assumenda voluptate omnis accusamus repudiandae quam eum!", image: "/images/nature.jpeg" },
   { name: "sarin_C", time: 4, likes: 54, replies: 14, message: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi minus atque earum fuga voluptatem voluptate ut doloribus? Odio soluta amet quidem assumenda voluptate omnis accusamus repudiandae quam eum!", image: "/images/nature.jpeg" },
   { name: "ameer__", time: 3, likes: 90, replies: 57, message: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi minus atque earum fuga voluptatem voluptate ut doloribus? Odio soluta amet quidem assumenda voluptate omnis accusamus repudiandae quam eum!", image: "/images/nature.jpeg" },
   { name: "riljo_denny_john", time: 21, likes: 45, replies: 46, message: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi minus atque earum fuga voluptatem voluptate ut doloribus? Odio soluta amet quidem assumenda voluptate omnis accusamus repudiandae quam eum!", image: "/images/nature.jpeg" },
   { name: "karthikeyan", time: 8, likes: 39, replies: 39, message: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis sequi minus atque earum fuga voluptatem voluptate ut doloribus? Odio soluta amet quidem assumenda voluptate omnis accusamus repudiandae quam eum!", image: "/images/nature.jpeg" },
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen max-w-md   flex-col items-cener justiy-between mx-auto ${inter.className}`} >
      <Head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Head>
      <div className="text-center mt-6 mb-2  top-0 flex justify-center items-center">
        <Image
          className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/logo1.png"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
      </div>
     {post.map(({name,message,time,likes,replies,image})=>(
       <Post name={name} message={message} time={time} likes={likes} replies={replies} image={image}  />
     ))}
     
    </main>
  )
}
