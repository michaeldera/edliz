import React from 'react'
import {book} from '../data/data'




export const Information = () => {
    return (
        <div>
            {book.contents.pre.map((elem: any) => (
                <section className={elem.short_title} key={elem.short_title}>
                    {elem.content}
                    <br />
                </section>
            ))}
        </div>
    )
}
