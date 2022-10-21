import Header from "../common/Header";
import News from "./News";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";

export default function Main() {
    return(
        <>
            <Header type={'main'} />
            <Visual />
            <News />
            <Pics />
            <Vids />
        </>
    )
}