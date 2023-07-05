import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import data from './Data';
import ScrollTop from '../../animations/OnScrollTop';

const Projects = () => {
    const { projects, getTimeDifference } = data; // Destructure named exports from the imported object

    return (
        <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title='Discover My Impressive Project Showcase' body='Projects' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {projects.map((item, index) => (
                    <ScrollTop key={index}>
                        <Card
                            title={item.title}
                            desc={item.desc}
                            src={item.src}
                            date={`Updated ${getTimeDifference(item.date)}`}
                            github={item.github}
                            site={item.site}
                        />
                    </ScrollTop>
                ))}
            </div>
        </section>
    );
};

export default Projects;
