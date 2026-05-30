import LastEdited from "./lastedited";
import { getLastModified } from "./git";

export default function LastEditedBlock({
    filePath,
}: {
    filePath: string;
}) {
    const date = getLastModified(filePath);

    return <LastEdited date={date} />;
}