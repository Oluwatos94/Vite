import React, { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: React.ReactNode
}

const Section = ({ children, title = "My subheading" }: SectionProps): ReactNode => {
    return (
        <section>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}

export default Section
