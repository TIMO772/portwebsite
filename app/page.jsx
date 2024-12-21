import dynamic from "next/dynamic";
export default function Home() {
  const Link = dynamic(() => import('next/link'))
  const Image = dynamic(() => import('next/image'))
  const AboutMe = dynamic(() => import('./Pages/AboutMe'))
  const Projects = dynamic(() => import('./Pages/Projects'))
  const Skills = dynamic(() => import('./Pages/Skills'))
  return (
    <>
        <section className="Home">
          <div className="cont">
            <div className="textbox">
            </div>
            <div className="imgbox"></div>
          </div>
        </section>
        
        











    </>

  );
}
