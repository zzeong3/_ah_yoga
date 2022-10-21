import Layout from "../common/Layout";

export default function Department() {
    return (
        
        <Layout name={'Department'}>
            <p className="desc_sub">
                Yoga is a way to freedom.
                By its constant practice,<br/>
                we can free ourselves from 
                fear, anguish, and loneliness.
            </p>
            <div className="bg">
                <div className="bg1"></div>
                <div className="bg2"></div>
                <div className="bg3"></div>
                <div className="bg4"></div>
            </div>

            <div className="info">
                <article>
                    <h3>YOGA?</h3>
                    <img src={process.env.PUBLIC_URL + '/img/img5.png'} alt="" />
                    <p>
                    Definition of Yoga<br />
                    Yoga refers to a complex mind-body training method that combines meditation, breathing, and stretching. <br />
                    It is a method of training the mind and body by refining posture and breathing, unifying and purifying the mind. <br />
                    type of yoga <br />
                    1. Mantra Yoga: Yoga to sublimate sound into light<br />
                    2. Karma Yoga: Yoga der Selbstaufopferung, um an der Gesellschaft teilzunehmen und zu dienen<br />
                    3. Bhakti Yoga: Yoga der Hingabe und Liebe zu Gott<br />
                    4. Jnana Yoga: Yoga des Wissens, das darauf abzielt, das eigene Ego zu brechen, indem es Urteilsvermögen erweckt<br />
                    5. Hatha Yoga: Körperyoga als Yoga über Körperhaltung und Atmung<br />
                    6. Raja Yoga: Ein Yoga der Kontemplation, Meditation und Samadhi.<br />
                    Ursprünge des Yogas <br />
                    Auch Yuga (瑜伽) genannt. Manchmal erlangen sie übernatürliche Kräfte. Aus Indien (印度) stammend, leitet sich die Etymologie des Yoga von dem umgangssprachlichen Wort „yuji“ ab, was „vereinen“ bedeutet.<br />

                    </p>
                </article>
            </div>
        </Layout>
    )
}