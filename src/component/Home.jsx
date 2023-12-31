import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"
// import {} from "vite-plugin-react-icons"
export default function Home() {
    return (
        <>
            <div className='home'id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only Solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laudantium expedita ad alias ratione fugit placeat sapiente velit. Magni accusantium possimus veniam veritatis! Quas, adipisci delectus. Blanditiis amet soluta placeat voluptatem quae quam doloremque reiciendis dolorum voluptatibus impedit, consectetur aspernatur in distinctio a veniam. Fugit rem nobis aut voluptates cumque quod, nemo ipsa, consectetur alias laboriosam molestias impedit. Excepturi, qui! Eveniet consequuntur a aliquid ducimus, minima, culpa ab amet iste quasi maxime odit perferendis laboriosam assumenda? Itaque ipsum tempore facilis repellat saepe facere vitae ratione soluta rerum consectetur. Distinctio, fuga dignissimos. Quasi assumenda similique deleniti hic qui vitae corrupti autem!</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>You Tube</p>
                        </div>
                        <div style={{
                            animationDelay: "0.9s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>


            </div>
        </>
    )
}
