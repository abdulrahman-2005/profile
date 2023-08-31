import os

path = os.path.join("./data/images/bgs")


for i, f in enumerate(os.listdir(path)):
    if f.endswith("svg"):
        os.rename(f"{path}/{f}", f"{path}/unset{i}.svg")

for i, f in enumerate(os.listdir(path)):
    if f.endswith("svg"):
        os.rename(f"{path}/{f}", f"{path}/bg{i}.svg")
