for i in ['N', 'E']:
    for j in ['C', 'P']:
        for k in range(65, 74):
            sequence_name = f"Consecutivo{i}{j}{chr(k)}"
            print(f"CREATE SEQUENCE {sequence_name}\
                  \n  START WITH 0\
                  \n  INCREMENT BY 1\
                  \n  MAXVALUE 99999999\
                  \nGO\n")
