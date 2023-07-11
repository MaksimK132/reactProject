import Designer_block from "../components/designer-block/Designer-block";
import Our_teams_header from "../components/our-teams-header/Our-teams-header"
import Service_block from "../components/service-block/Service-block";

const Our_teams = () => {
    return (<main className="main">
                <Our_teams_header />
                <Designer_block />
                <Service_block />
            </main>);
}
 
export default Our_teams;