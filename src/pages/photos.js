import React from 'react'
import {useContext} from 'react'
import {Context} from '../context'
import {getClass} from "../utils/index"
import Image from '../images'

function Photos() {

    const {allPhotos} = useContext(Context)
console.log(allPhotos)
const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
))

    return (
        <div>
            <main className="photos">
               {imageElements}
            </main>
        </div>
    )
}

export default Photos
