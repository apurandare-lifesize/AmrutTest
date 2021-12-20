file = open("vmr.txt", "r")
r = []
for line in file:
    line=line.strip('\n\t')
    r.append(line)         
    #l=line.strip("\n")
    #print r
    #r.append(l)
    #print r
    #r.split('\t')
print r
file.close()
