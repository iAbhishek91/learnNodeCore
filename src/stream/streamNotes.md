# Streams

## what is stream

- **sequence of data** made available over time.

- pieces of data that combines later into whole.

- data flows through stream, just like river.

- it can pass data between source to target.

- source and target can be anything, like b/w processes, b/w computers also with in Internet.

- great example: *is movie streaming over internet*, we don't expect the data in whole. we get a smaller portion of data consume it(processing the data in **chunks**). Meanwhile the next set of data arrives using the same stream.

- **processing the data as it arrives**, not the whole data.

- the concept of **stream** and **buffer** are combined. Specific amount of data stored in buffer are passed on to stream for processing and then next amount of data is put in the buffer(**buffering**) and the process continiues...

- **buffering** is a concept of filling the buffer before it can be proessed, as minimum amount of data is required for processing.