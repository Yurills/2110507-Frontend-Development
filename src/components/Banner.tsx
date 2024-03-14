'use client'
import styles from './banner.module.css';
import Image from 'next/image';
import { useState} from 'react';

export default function Banner() {
    const cover = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg']
    const [index,setIndex] = useState(0);

    return (
        <div className={styles.banner} onClick={()=> { setIndex((index+1))}}>
            <Image src={cover[index%3]} 
            alt='cover' 
            fill = {true}
            priority
            className = 'object-cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Your Travel Partner</h1>
                <h3 className='text-xl font-serif'>Explore Your World with Us</h3>
            </div>
        </div>

    );
}