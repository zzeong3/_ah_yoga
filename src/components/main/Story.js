import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons' 

export default function Story({Scrolled, start}) {
    const position = Scrolled - start || 0;

    // community
    const getLocalData = () => {   
        const dummyPosts = [
            {
                title : 'Dawn Nickel of She Recovers on The Many Paths To Recovery',
                content : 'Sometimes if you’re lucky someone reaches out to you in the early days when you’re first trying to stop drinking and shows you how to take the first steps. And for me that person was Dawn Nickel. I was thrilled to interview Dawn and talk about women and the way we recover, from all things and in all ways. I hope you love this conversation as much as I did.'
            },
            {
                title : 'The She Recovers Foundation’s Evolving Mission',
                content : 'Addiction recovery flourishes when it’s fueled by honesty. For queer, transgender and nonbinary folks who identify within women’s communities, honesty must first come from a place of safety. The She Recovers Foundation (SRF) is acutely aware of this, and recently incorporated a weekly recovery group into its programming to address the specific needs of this particular subgroup.'
            },
            {
                title : 'The 17 Best Online Sobriety Support Spaces For 2021',
                content : 'So much of our world has gone digital, especially with the pandemic. For people in recovery who previously relied on in-person support, the need to replicate that network virtually is more important than ever.'
            },
            {
                title : 'CA Newly Sober 18: Payton Kennedy',
                content : 'Payton Kennedy is a yoga instructor, dance facilitator, and events coordinator for SHE RECOVERS Foundation. SHE RECOVERS creates a safe space for women to recover and heal from trauma. In this episode we talk about finding ourselves and reclaiming our childhood joy. Thanks for a rad conversation, Payton! Keep up the good work!'
            },
            {
                title : 'Meet the Change-Makers',
                content : 'Introducing the very first episode of #MeetTheChangeMakers, a monthly video series hosted by Robyn Cruze-Harrington that spotlights amazing non-profits that you need to know about. During this kick-off episode, Robyn speaks with Dawn Nickel and Taryn Strong, the mother and daughter team and cofounders of She Recovers.'
            },
            {
                title : '25 Women-Led Recovery Podcasts to Listen to When You Need Hope',
                content : 'SHE RECOVERS Podcast was featured in the Temper’s list of podcasts “that will leave you feeling inspired, informed, and less alone.”'
            },
        ];

        const data = localStorage.getItem('post');

        if(data){
            return JSON.parse(data);
        } else {
            return dummyPosts;
        }
    };

    const [Posts] = useState(getLocalData()); 

    useEffect(() => {
        localStorage.setItem('post', JSON.stringify(Posts));
    }, []);

    // pics
    
    const Pics = useSelector(store => store.flickrReducer.flickr)
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);


    return (
        <>

        <section id="story" className='myScroll'>
            <strong className="scroll_txt"
                style={{
                    left:-900 + position/2,
                }}
            ><span className="txt">with</span>&
            </strong>

            <div className="lines">
                <div className="lines_line line1"></div>
                <div className="lines_line line2"></div>
            </div>
            <h2 className="tit">AH-YOGA<br />STORY</h2>
            <div className="line3"></div>

            <div className="info_story">
                <div className="pics">
                    <h3 className="hidden">PHOTO</h3>
                    <ul className="list_pics">
                        {Pics.map((pic, idx)=>{
                            if(idx >7) return;
                            return (
                                <li key={pic.id} onClick={()=>{
                                    pop.current.open();
                                    setIndex(idx);
                                }}>
                                    <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className="community">
                    <h3 className="hidden">COMMUNITY</h3>
                    {Posts.map((post, idx) => {
                        if (idx >=4) return; 
                        return(
                            <article key={idx}>
                                <strong>{post.title}</strong>
                                <p>{post.content}</p>
                            </article>
                        )
                    })} 
                </div>
            </div>
        </section>
        
        <Popup ref={pop}>
            {Pics.length !== 0 && (
                <img 
                    src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`} alt={Pics[Index].title}/>
                )      
            }
        </Popup>

        </>
    )
}

