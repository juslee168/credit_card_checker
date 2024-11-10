import pandas as pd
import os
import json

print(os.getcwd())

# Load the CSV file, specifying only the first column and treating it as a string
df = pd.read_csv('project/bin-list-data.csv', usecols=[0], dtype=str)

# Rename the column to "BIN" if necessary
df.columns = ["BIN"]

# Convert the DataFrame to a list of dictionaries
data = df.to_dict(orient='records')

# Write out as a JSON array to bin.json
with open('bin.json', 'w') as f:
    json.dump(data, f, indent=2)