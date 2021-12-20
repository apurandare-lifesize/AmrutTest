import pprint as p
import csv

#csvfile = open('Merlin.csv', 'r')
with open('FractalEmailList.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter='@')
    for row in reader:
        print row[0]
        print row[1]
