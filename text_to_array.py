# Script that converts a text file to a JS file that contains an array of strings
# Each string represents a word from the text file. The words contain only letters and numbers.
# Usage: python text_to_array.py <input_file> <output_file>
# Example: python text_to_array.py input.txt output.js

import sys
import string

def text_to_array(input_file, output_file):
    with open(input_file, 'r') as f:
        text = f.read()
    words = [word.strip(string.punctuation) for word in text.split() if word.strip(string.punctuation).isalnum()]
    with open(output_file, 'w') as f:
        f.write('const words = ' + str(words) + ';')

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print('Usage: python text_to_array.py <input_file> <output_file>')
    else:
        text_to_array(sys.argv[1], sys.argv[2])
        print('Done')
