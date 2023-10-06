import React, {useEffect} from 'react'


import 'bootstrap/dist/css/bootstrap.css'; import 'bootstrap/js/dist/dropdown';

const About = () => {
    
   
    useEffect(() => {
        document.title = `About - NewsFetcher`;
        // eslint-disable-next-line
    }, [])

    return (
        <>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}> About Us</h1>
      <div className="  container " >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ducimus enim explicabo cumque quasi quo in, quis fugit dolor et doloremque deserunt voluptatum magnam, quam culpa laboriosam recusandae! Excepturi, dignissimos ullam esse exercitationem quas veritatis a ipsa voluptatem. Asperiores unde rem voluptatum quo dolore omnis soluta impedit ullam molestiae officia necessitatibus sint sit eius iusto quam harum, pariatur, accusamus numquam. Excepturi ex, quis fugit error placeat, ducimus natus hic officia facere autem maiores tempora consequatur. Cumque, voluptatum explicabo? Repudiandae eum exercitationem vitae molestiae expedita, reiciendis numquam adipisci ad doloribus beatae, soluta, quasi ipsa labore quia nostrum saepe laboriosam? Qui, quae?
            </div>
        </>
    )

}

export default About
