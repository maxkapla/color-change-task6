import csv
import os
import random
import math

N_TRIALS = 96
SET_SIZE = 6

PARTICIPANT_ID = 1  # change this for each participant

PALETTE = {
    "dark_blue": [0.122, 0.467, 0.706],
    "orange":    [1.000, 0.498, 0.055],
    "green":     [0.173, 0.627, 0.173],
    "red":       [0.839, 0.153, 0.157],
    "purple":    [0.580, 0.404, 0.741],
    "brown":     [0.549, 0.337, 0.294],
    "pink":      [0.890, 0.467, 0.761],
    "gray":      [0.800, 0.800, 0.800],
    "olive":     [0.737, 0.741, 0.133],
    "teal":      [0.090, 0.745, 0.812],
}

SHAPES = [3, 4, 5, 6, 8, 64]

OUT_CSV = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    f"shape_color_change_trials_p{PARTICIPANT_ID}.csv"
)

if N_TRIALS % 2 != 0:
    raise ValueError("N_TRIALS must be even.")

if (N_TRIALS // 2) % SET_SIZE != 0:
    raise ValueError("N_TRIALS // 2 must be divisible by SET_SIZE.")

def rgb_dist(a, b):
    return math.sqrt(
        (a[0] - b[0])**2 +
        (a[1] - b[1])**2 +
        (a[2] - b[2])**2
    )

def sample_colors(rng):
    names = list(PALETTE.keys())

    while True:
        pick = rng.sample(names, SET_SIZE)
        good = True

        for i in range(SET_SIZE):
            for j in range(i + 1, SET_SIZE):
                if rgb_dist(PALETTE[pick[i]], PALETTE[pick[j]]) < 0.35:
                    good = False

        if good:
            return pick

fixed_rng = random.Random(1)

change_list = [1] * (N_TRIALS // 2) + [0] * (N_TRIALS // 2)

positions = list(range(SET_SIZE)) * ((N_TRIALS // 2) // SET_SIZE)
fixed_rng.shuffle(positions)

trial_plan = []
pos_index = 0

for change in change_list:
    if change == 1:
        pos = positions[pos_index]
        pos_index += 1
    else:
        pos = -1

    trial_plan.append({
        "change": change,
        "pos": pos
    })

fixed_rng.shuffle(trial_plan)

rows = []

for fixed_trial_number, plan in enumerate(trial_plan, start=1):
    change = plan["change"]
    pos = plan["pos"]

    shapes = fixed_rng.sample(SHAPES, SET_SIZE)
    mem_cols = sample_colors(fixed_rng)
    probe_cols = mem_cols.copy()

    if change == 1:
        old = probe_cols[pos]
        used = [c for i, c in enumerate(probe_cols) if i != pos]
        options = [c for c in PALETTE.keys() if c != old and c not in used]
        probe_cols[pos] = fixed_rng.choice(options)
        correct = "d"
    else:
        correct = "s"

    row = {
        "fixed_trial_number": fixed_trial_number,
        "change": change,
        "pos": pos,
        "correct": correct,
    }

    for i in range(SET_SIZE):
        row[f"v{i+1}"] = shapes[i]
        row[f"col{i+1}"] = mem_cols[i]
        row[f"tcol{i+1}"] = probe_cols[i]

    rows.append(row)

participant_rng = random.Random(PARTICIPANT_ID)
participant_rng.shuffle(rows)

for presentation_order, row in enumerate(rows, start=1):
    row["presentation_order"] = presentation_order

with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    fieldnames = (
        ["presentation_order", "fixed_trial_number", "change", "pos", "correct"]
        + [f"v{i+1}" for i in range(SET_SIZE)]
        + [f"col{i+1}" for i in range(SET_SIZE)]
        + [f"tcol{i+1}" for i in range(SET_SIZE)]
    )

    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print(f"Wrote {N_TRIALS} trials for participant {PARTICIPANT_ID} to {OUT_CSV}")