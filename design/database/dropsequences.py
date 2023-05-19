for i in ['N', 'E']:
    for j in ['C', 'P']:
        for k in range(65, 74):
            sequence_name = f"Consecutivo{i}{j}{chr(k)}"
            print(f"DROP SEQUENCE {sequence_name}\nGO")
