files = {}

for line in file('udlaan-eks.csv'):
    line = line.split(",")
    alderkon = (line[3] + line[4]).replace("\"", "").replace("-01-01", "")
    bog_id = line[2]
    if not files.has_key(alderkon):
        files[alderkon] = file('stat/' + 
                (alderkon or 'uden_navn') + '.data', "w")
    files[alderkon].write(bog_id + '\n')

