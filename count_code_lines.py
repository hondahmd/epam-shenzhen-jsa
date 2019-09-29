import os
import sys

ext_name = ['.ts', '.js']
file_dirs = ['./week-01', './week-02']
#file_dirs = ['./week-02/day-04/hanoi/']
lineCount = 0
fileCount = 0
for file_dir in file_dirs:
    for root, dirs, files in os.walk(file_dir):
        for file in files:
            if os.path.splitext(file)[1] in ext_name:
                fileCount += 1
                orig_name = os.path.join(root, file)
                #print(orig_name)
                if(os.path.exists(orig_name)):
                    length = len(open(orig_name, 'r').readlines())
                    lineCount += length
                    #print(length)
print('total files: ', fileCount)
print('total lines: ', lineCount)
