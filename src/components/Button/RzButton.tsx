import { Button } from "@mantine/core";
import classes from "./RzButton.module.css";

export function RzButton({ classRef }: { classRef: string }) {
	return (
		<Button variant="filled" className={classes[classRef]}>
			Button
		</Button>
	);
}
