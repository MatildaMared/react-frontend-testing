import { Dinosaur } from "../../models/Dinosaur";

interface Props {
  dino: Dinosaur
}

const ViewDinosaur = ({ dino }: Props) => {
	return (
		<div>
			<h3>{dino.name}</h3>I have {dino.horns} horns!
		</div>
	);
};

export default ViewDinosaur;
