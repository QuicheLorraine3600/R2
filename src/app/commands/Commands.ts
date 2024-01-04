import { List } from "immutable";
import { Command } from "./Command";

import Eval from "./src/Eval";
import Ping from "./src/Ping";
import Help from "./src/Help";
import MotivateMe from "./src/MotivateMe";
import PublicDomain from "./src/PublicDomain";
import Votation from "./src/Votation";
import FakeMessage from "./src/FakeMessage";
import ScheduleMessage from "./src/ScheduleMessage";

import Connect from "./src/Connect"

// TODO: Coup d'état
import Remorquer from "./src/Remorquer"
import CrazyFrog from "./src/CrazyFrog"
import Overwatch from "./src/Overwatch"
import LethalCompany from "./src/LethalCompany"

export default List<Command>([
	new Help(),
	new MotivateMe(),
	new Eval(),
	new Ping(),
	new PublicDomain(),
	new Votation(),
	new FakeMessage(),
	new ScheduleMessage(),
	
	new Connect(),
	new Remorquer(),
	new CrazyFrog(),
	new Overwatch(),
	new LethalCompany()
])