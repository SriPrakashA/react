import { Aayushfooter } from "../components/aayush poly/aayush footer/aayushfooter"
import { Testimonals } from "../components/aayush poly/aayush testimonals/testimonals"
import { Aayushbanner } from "../components/aayush poly/banner/aayushbanner"
import { Aayushheader } from "../components/aayush poly/header/header"


function Aayush() {
    return(<>
        <Aayushheader />
        <Aayushbanner />
        <Testimonals />
        <Aayushfooter />
    </>)
}

export{Aayush}