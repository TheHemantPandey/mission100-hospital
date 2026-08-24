import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "jobs.json");

// Helper to read jobs
function readJobs() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// GET: Returns list of jobs
export async function GET() {
  try {
    const jobs = readJobs();
    return Response.json(jobs);
  } catch (err) {
    return Response.json({ error: "Failed to read jobs" }, { status: 500 });
  }
}
