import { execSync } from "child_process";

export function getLastModified(filePath: string) {
    return execSync(
        `git log -1 --format=%cI "${filePath}"`
    )
        .toString()
        .trim();
}