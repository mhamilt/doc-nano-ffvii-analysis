import csv
import subprocess
from pathlib import Path

CSV_FILE = "timecodes.csv"
SOURCE_DIR = Path("audio/final_fantasy_vii_soundtrack")
OUTPUT_DIR = "audio"
with open(CSV_FILE, newline="") as f:
    reader = csv.DictReader(f)

    for row in reader:
        track = row["track"]
        ss = row["ss"]
        to = row["to"]
        name = row["name"]

        # find matching input file like 01*.mp3
        matches = list(SOURCE_DIR.glob(f"{track}*"))

        if not matches:
            print(f"No file found for track {track}")
            continue

        input_file = matches[0]
        output_file = f"{OUTPUT_DIR}/{name}.mp3"

        cmd = [
            "ffmpeg",
            "-y",
            "-i", str(input_file),
            "-ss", ss,
            "-to", to,
            "-c", "copy",
            output_file,
        ]

        print("Running:", " ".join(cmd))
        # subprocess.run(cmd, check=True)