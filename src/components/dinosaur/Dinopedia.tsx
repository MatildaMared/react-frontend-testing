import { Dinosaur } from "../../models/Dinosaur";
import ViewDinosaur from "./ViewDinosaur";

const Dinopedia = () => {
	const dinos: Dinosaur[] = [
		{
			name: "Triceratops",
			horns: 3,
		},
		{
			name: "Tyrannosaurus",
			horns: 4,
		},
	];

	return (
		<section>
			<h3>Dinosaur list 🦕</h3>
			<ul>
				{dinos.map((dino) => (
					<li key={dino.name}>
						<ViewDinosaur dino={dino} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Dinopedia;
