
def is_perfect(num):
    divisors = [i for i in range(1, num) if num % i == 0]
    sum_num = sum(divisors)
    if sum_num == num:
        return True
    else:
        return False

x = int(input('Give me the number. If its perfect, youll see True, if not - False: ')) 

if is_perfect(x):
    print(x, "a perfect number")
else:
    print(x, "not a perfect number")
